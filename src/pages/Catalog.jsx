import React, { useEffect, useState } from 'react'
import xml2js from 'xml2js'
import Cards from '../components/Cards/Cards'
import PageSwitcher from '../components/ui/PageSwitcher/PageSwitcher';

const parser = new xml2js.Parser();

async function windows1251ResponseToUTF8Response(response) {
  return new Response(new TextDecoder("windows-1251").decode(await response.arrayBuffer()));
} 

const shownItemCount = 50

const Catalog = () => {
  console.log('Render Catalog')
  const [shop, setShop] = useState()
  const [offers, setOffers] = useState()
  const [categories, setCategories] = useState()
  const [currentPage, setCurrentPage] = useState(1)
  const [shownOffersCount, setShownOffersCount] = useState(10) 

  useEffect(() => {
    fetch('https://mebelcity.com/bitrix/catalog_export/yandex_full.php')
    .then(response => windows1251ResponseToUTF8Response(response))
    .then(response => response.text())
    .then(xmlText => parser.parseStringPromise(xmlText))
    .then(data => {
      // setData(result)
      const shop = data['yml_catalog'].shop[0]
      const offers = shop.offers[0].offer.filter(({ quantity }) => quantity && quantity[0] > 0)
      const categories = shop.categories[0].category.map(({ _:name, $:attrib  }) => ({ id: attrib.id, name }))

      setShop(shop)
      setOffers(offers)
      setCategories(categories)
    })
  }, [])

  if (!offers) return <div>Загрузка</div>
  console.log('shop', shop)
  console.log('offers', offers)
  console.log('categories', categories)
  return (
    <div className="container">
      <Cards cards={offers.slice(shownItemCount * (currentPage - 1), shownItemCount * currentPage)}/>
      <PageSwitcher itemCount={offers && offers.length} shownItemCount={shownItemCount} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    </div>
  );
}

export default Catalog
