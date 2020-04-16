import axios from "axios";
import {GRABPLACES} from "../acttypes/types"

export const getGroceryPlaces = () => dispatch => {
  axios.get("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=37.78825,-122.4324&radius=2000&type=grocery_or_supermarket&key=AIzaSyAuSdfq5E_VP6LnZwNkv4mPn3LbwIzjyCU")
  //https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=1500&type=restaurant&keyword=cruise&
  .then(res => {
    dispatch({
      type: GRABPLACES,
      payload: res.data.results
    })
  })
  .catch(err => {
    console.log(err)
  })
}



export const savePrimaryGroceryLocation = (groceryProvider) => {
  //select each of th grocery locations
  axios.post("http://localhost:5000/api/setgrocery", groceryProvider)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
}
