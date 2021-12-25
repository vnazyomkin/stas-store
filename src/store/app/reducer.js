import { actionTypes } from './action'

const initialState = {
  isLoading: false,
  error: null,
  offers: null,
  categories: null,
  shownCategoriesId: ['772'],
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case (actionTypes.LOAD_DATA_STARTED): {
      return {...state, isLoading: true}
    }
    case (actionTypes.LOAD_DATA_REQUEST): {
      return state
    }
    case (actionTypes.LOAD_DATA_COMPLETE): {
      return {...state, isLoading: false, data: action.payload.data }
    }
    case (actionTypes.LOAD_DATA_FAILED): {
      return {...state, isLoading: false}
    }
    default: {
      return state
    }
  }
}

export default rootReducer
