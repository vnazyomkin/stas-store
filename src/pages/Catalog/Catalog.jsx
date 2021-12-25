import React, { useEffect, useState } from 'react'
import xml2js from 'xml2js'
import _ from 'lodash'
import Cards from '../../components/Cards/Cards'
// import Tags from '../../components/Tags/Tags';
import PageSwitcher from '../../components/ui/PageSwitcher/PageSwitcher';
import Layout from '../../components/Layout/Layout';

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
  const [shownCategories, setShownCategories] = useState(['772'])
  // const [shownOffersCount, setShownOffersCount] = useState(10) 

  useEffect(() => {
    fetch('https://mebelcity.com/bitrix/catalog_export/yandex_full.php')
    .then(response => windows1251ResponseToUTF8Response(response))
    .then(response => response.text())
    .then(xmlText => parser.parseStringPromise(xmlText))
    .then(data => {
      const shop = data['yml_catalog'].shop[0]
      const offers = shop.offers[0].offer.filter(({ quantity }) => quantity && quantity[0] > 0)
      const allCategories = shop.categories[0].category.map(({ _:name, $:attrib  }) => ({ 
        id: attrib.id, 
        parentId: attrib.parentId, 
        name,
      }))


      const allCategoriesObj = _.keyBy(allCategories, 'id')
      const [categories, parentCategories] = _.partition(allCategories, ({ parentId }) => parentId)
      const parentCategoriesObj = _.keyBy(parentCategories, 'id')
      const categoriesObj = _.groupBy(categories, ({ parentId }) => (parentId && parentCategoriesObj[parentId]) ? parentCategoriesObj[parentId].name : 'Другие')
      console.log('offers', offers)
      console.log('allCategoriesObj', allCategoriesObj)
      console.log('parentCategoriesObj', parentCategoriesObj)
      console.log('categoriesObj', categoriesObj)
      // const offersObj = _.groupBy(offers, ({ categoryId }) => {
      //   // debugger
      //   return categoryId && allCategoriesObj[categoryId].name
      // })

      const offersObj = _.groupBy(offers, 'categoryId')

      console.log('parentCategoriesObj', parentCategoriesObj)
      
      setShop(shop)
      setOffers(offersObj)
      setCategories(categoriesObj)
    })
  }, [])

  console.log('shop', shop)
  console.log('offers', offers)
  if (!offers || !categories) return <div>Загрузка</div>
  const filteredOffers = shownCategories.reduce((result, id) => result.concat(offers[id]), [])

  return (
    <Layout categories={categories} shownCategories={shownCategories} setShownCategories={setShownCategories}>
      {/* <Tags tags={categories}/> */}
      <Cards cards={filteredOffers.slice(shownItemCount * (currentPage - 1), shownItemCount * currentPage)}/>
      <PageSwitcher itemCount={filteredOffers && filteredOffers.length} shownItemCount={shownItemCount} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    </Layout>
  );
}

export default Catalog
