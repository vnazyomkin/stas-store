import { loadDataComplete, loadDataFailed, loadDataRequest } from "./action"
import xml2js from 'xml2js'
import _ from 'lodash'

const parser = new xml2js.Parser();

async function windows1251ResponseToUTF8Response(response) {
  return new Response(new TextDecoder("windows-1251").decode(await response.arrayBuffer()));
} 

const onMountToLoadData = () => {
  return (dispatch) => {
    dispatch(loadDataRequest())
    fetch('https://mebelcity.com/bitrix/catalog_export/yandex_full.php')
    .then(response => windows1251ResponseToUTF8Response(response))
    .then(response => response.text())
    .then(xmlText => parser.parseStringPromise(xmlText))
    .then(data => {
      const shop = data['yml_catalog'].shop[0]
      const offersArr = shop.offers[0].offer.filter(({ quantity }) => quantity && quantity[0] > 0)
      const allCategories = shop.categories[0].category.map(({ _:name, $:attrib  }) => ({ 
        id: attrib.id, 
        parentId: attrib.parentId, 
        name,
      }))
      
      const [categoriesArr, parentCategoriesArr] = _.partition(allCategories, 'parentId')//({ parentId }) => parentId)
      const parentCategories = _.keyBy(parentCategoriesArr, 'id')
      const categories = _.groupBy(categoriesArr, 'parentId')
      const offers = _.groupBy(offersArr, 'categoryId')

      dispatch(loadDataComplete(offers, categories, parentCategories))
    })
    .catch(err => dispatch(loadDataFailed(err)))
  }
}

export {
  onMountToLoadData,
}