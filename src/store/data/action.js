import { onMountToLoadData } from './epic'

const actionTypes = {
  // LOAD_DATA_STARTED: '@@app/LOAD_DATA_STARTED',
  LOAD_DATA_REQUEST: '@@data/LOAD_DATA_REQUEST',
  LOAD_DATA_FAILED: '@@data/LOAD_DATA_FAILED',
  LOAD_DATA_COMPLETE: '@@data/LOAD_DATA_COMPLETE',

  CHANGE_SHOWN_CATEGORIES: '@@data/CHANGE_SHOWN_CATEGORIES',
} 

const loadDataStarted = onMountToLoadData

const loadDataRequest = () => ({
  type: actionTypes.LOAD_DATA_REQUEST
})

const loadDataFailed = (error) => ({
  type: actionTypes.LOAD_DATA_FAILED,
  payload: error,
})

const loadDataComplete = (offers, categories, parentCategories) => ({
  type: actionTypes.LOAD_DATA_COMPLETE,
  payload: {
    data: {
      offers,
      categories,
      parentCategories,
    }
  }
})

const changeShownCategories = (shownCategories) => ({
  type: actionTypes.CHANGE_SHOWN_CATEGORIES,
  payload: {
    shownCategories,
  }
}) 

export {
  actionTypes,
  loadDataStarted,
  loadDataRequest,
  loadDataFailed,
  loadDataComplete,
  changeShownCategories,
}