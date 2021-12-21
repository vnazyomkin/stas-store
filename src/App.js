/* eslint-disable no-unused-vars */
import React, { useEffect, useMemo, useState } from 'react'
import xml2js from 'xml2js'
import './App.css';
import Cards from './components/Cards/Cards';

// const emptyArray = []

const parser = new xml2js.Parser();

async function windows1251ResponseToUTF8Response(response) {
  return new Response(new TextDecoder("windows-1251").decode(await response.arrayBuffer()));
} 

const App = () => {
  const [data, setData] = useState()
  const [shop, setShop] = useState()
  // console.log('shop', shop)
  // const [offers, setOffers] = useState()
  const [shownOffersCount, setShownOffersCount] = useState(10) 

  useEffect(() => {
    fetch('https://mebelcity.com/bitrix/catalog_export/yandex_full.php')
    .then(response => windows1251ResponseToUTF8Response(response))
    .then(response => response.text())
    .then(xmlText => parser.parseStringPromise(xmlText))
    .then(result => setData(result))
  }, [])

  // useEffect(() => {
  //   const offers = shop.offers[0].offer
  //   console.log('offers', offers)
  // }, [shop])

  useMemo(() => {
    if (data) setShop(data['yml_catalog'].shop[0])
  }, [data])

  if (!data || !shop) return <div>Загрузка</div>
  const offers = shop.offers[0].offer.slice(0, shownOffersCount)
  console.log('offers', offers)
  return (
    <div className="App">
      <div className="container">
        <Cards cards={offers}/>
      </div>
    </div>
  );
}

export default App;
