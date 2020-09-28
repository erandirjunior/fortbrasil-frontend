import Vue from 'vue'
import axios from 'axios'

axios.interceptors.request.use(function (config) {
  const regex = config.url.match(/https:\/\/viacep\.com\.br\/ws\//)

  if (!regex) {
    config.headers.Authorization = localStorage.getItem('tokenSite')
  }

  return config
})

Vue.prototype.$axios = axios
