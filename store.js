import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk"
import registrationReducer from './reducers/registrationreducer.js'


const initialState = {
  loggedIn: false,
}

const store = createStore(registrationReducer, initialState)


export default store
