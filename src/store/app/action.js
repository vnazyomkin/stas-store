const actionTypes = {
  LOAD_DATA_STARTED: '@@app/LOAD_DATA_STARTED',
  LOAD_DATA_REQUEST: '@@app/LOAD_DATA_REQUEST',
  LOAD_DATA_FAILED: '@@app/LOAD_DATA_FAILED',
  LOAD_DATA_COMPLETE: '@@app/LOAD_DATA_COMPLETE'
}

const loadDataStarted = () => ({
  type: actionTypes.LOAD_DATA_STARTED
})

const loadDataRequest = () => ({
  type: actionTypes.LOAD_DATA_REQUEST
})

const loadDataFailed = () => ({
  type: actionTypes.LOAD_DATA_FAILED
})

const loadDataComplete = () => ({
  type: actionTypes.LOAD_DATA_COMPLETE
})

export {
  actionTypes,
  loadDataStarted,
  loadDataRequest,
  loadDataFailed,
  loadDataComplete,
}