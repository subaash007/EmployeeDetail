import axios from 'axios'
const empApi = axios.create({
    baseURL: 'http://localhost:8081',
    headers: {
      lang: 'en',
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })

const empEndpoint = {
    get:'/employee',
    create:'/employee',
    update:'/employee/',
    getEmployeeByID:'/employee/'
}

export {empApi,empEndpoint}

