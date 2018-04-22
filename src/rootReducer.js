import { combineReducers } from 'redux'
import userReducer from 'src/reducers/user'

const reducers = {
  userReducer
}

const rootReducer = combineReducers(reducers)
export default rootReducer