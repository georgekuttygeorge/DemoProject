import axios from 'axios'

export default function request(type,url,params) {
    
    switch(type) {
      case 'get':
      return axios.get(url,{params:params})
      .then(function (response) {return response.data})
      .catch(function (error) {return error})
      break;
      case 'post':
      return axios.post(url,params)
      .then(function (response) {return response.data})
      .catch(function (error) {return error})
      break;
      case 'delete':
      return axios.delete(url)
      .then(function (response) {return response.data})
      .catch(function (error) {return error})
    } 
}
