import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk"
import registrationReducer from './reducers/registrationreducer.js'
import mapsReducer from './reducers/mapsReducer.js'


const initialState = {
  loggedIn: false,
}

const store = createStore(mapsReducer, initialState, applyMiddleware(thunk))


export default store
