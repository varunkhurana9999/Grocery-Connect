import axios from "axios";
import axiosHeader from '../config/axiosHeader'


export const registerUser = (data) => {
  axios.post("http://localhost:5000/auth/signup", data)
  .then(res => {
      // set JWT session token for user and axios request
      const token = res.data
      localStorage.setItem('token', token)
      axiosHeader(token)
      // disptach userstate fform auth token
  });
}


export const testFunction  = (data) => {
  console.log("invoked")
}
