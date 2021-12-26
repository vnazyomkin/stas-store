import { actionTypes } from './action'
// import { onMountToLoadData } from './epic'

const initialState = {
  isLoading: true,
  error: null,
  data: {
    categories: null,
    parentCategories: null,
    offers: null,
  },
  shownCategories: ['772'],
}

const rootReducer = (state = initialState, action) => {
  const { payload } = action
  switch (action.type) {
    case (actionTypes.LOAD_DATA_REQUEST): {
      return {
        ...state, 
        isLoading: true,
        error: null,      }
    }
    case (actionTypes.LOAD_DATA_COMPLETE): {
      return {...state, isLoading: false, data: payload.data }
    }
    case (actionTypes.LOAD_DATA_FAILED): {
      return {...state, isLoading: false, error: payload.error}
    }
    case (actionTypes.CHANGE_SHOWN_CATEGORIES): {
      return { ...state, shownCategories: payload.shownCategories }
    }
    default: {
      return state
    }
  }
}

const selectOffers = state => state.data.data.offers
const selectIsLoading = state => state.data.isLoading
const selectShownCategories = state => state.data.shownCategories
const selectCategories = state => state.data.data.categories

export {
  rootReducer as default,
  selectOffers,
  selectIsLoading,
  selectShownCategories,
  selectCategories,
}
