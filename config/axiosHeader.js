import axios from "axios";

export default axiosHeader = (token) => {
  if (token) {
      axios.defaults.headers.common['Authorization'] = "Bearer " + token;
  } else {
      axios.defaults.headers.common['Authorization'] = null;
  }
}
