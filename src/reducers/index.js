import { combineReducers } from 'redux'
import test from './portada/test'
import realtime from './realtime'
import searchlist from './portada/search_list'
import searchload from './portada/search_load'
export default combineReducers({
  portada: combineReducers({
      status: test,
      data: searchlist,
      load: searchload
  }),
  realtime
})
