import axios from "axios";
import axiosHeader from '../config/axiosHeader'
import { AsyncStorage } from 'react-native';



export const registerUser = async (data) => {
  const response = await axios.post("http://localhost:5000/auth/signup", data)
  .then(res => {
      // set JWT session token for user and axios request
      const token = res.data
      AsyncStorage.setItem('token', token)
      axiosHeader(token)
      // disptach userstate fform auth token
  });
}


export const testFunction  = (data) => {
  console.log("invoked")
}
