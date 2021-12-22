import React, { useEffect, useState } from 'react'
import xml2js from 'xml2js'
import Cards from '../components/Cards/Cards'
import PageSwitcher from '../components/ui/ImageSlider/PageSwitcher/PageSwitcher';

const parser = new xml2js.Parser();

async function windows1251ResponseToUTF8Response(response) {
  return new Response(new TextDecoder("windows-1251").decode(await response.arrayBuffer()));
} 

const shownItemCount = 50

const Catalog = () => {
  console.log('Render Catalog')
  // const [data, setData] = useState()
  const [shop, setShop] = useState()
  const [offers, setOffers] = useState()
  const [categories, setCategories] = useState()
  // eslint-disable-next-line no-unused-vars
  const [currentPage, setCurrentPage] = useState(1)
  // const [categories, setСategories] = useState()
  // console.log('shop', shop)
  // const [offers, setOffers] = useState()
  // eslint-disable-next-line no-unused-vars
  const [shownOffersCount, setShownOffersCount] = useState(10) 

  useEffect(() => {
    fetch('https://mebelcity.com/bitrix/catalog_export/yandex_full.php')
    .then(response => windows1251ResponseToUTF8Response(response))
    .then(response => response.text())
    .then(xmlText => parser.parseStringPromise(xmlText))
    .then(data => {
      // setData(result)
      const shop = data['yml_catalog'].shop[0]
      const offers = shop.offers[0].offer
      const categories = shop.categories[0].category.map(({ _:name, $:attrib  }) => ({ id: attrib.id, name }))

      setShop(shop)
      setOffers(offers)
      setCategories(categories)
    })
  }, [])

  // useEffect(() => {
  //   const offers = shop.offers[0].offer
  //   console.log('offers', offers)
  // }, [shop])

  // useMemo(() => {
  //   if (data) setShop(data['yml_catalog'].shop[0])
  // }, [data])

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
