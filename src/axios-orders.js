import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-builder-c0867.firebaseio.com/"
});

export default instance;
