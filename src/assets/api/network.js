import axios from 'axios'

// 简单封装 axios
axios.defaults.baseURL = ' http://localhost:9898/'

axios.defaults.timeout = 10000

function get(path, data) {
  return new Promise((resolve, reject) => {
    axios.get(path, {
      params: data
    })
      .then(value => {
        resolve(value.data)
      })
      .catch(reason => {
        reject(reason)
      })
  })
}

function post(path, data) {
  return new Promise((resolve, reject) => {
    axios.post(path, data)
      .then(value => {
        resolve(value.data)
      })
      .catch(reason => {
        reject(reason)
      })
  })
}

function all(...requestList) {
  return new Promise((resolve, reject) => {
    Promise.all(...requestList)
      .then(values => {
        resolve(values)
      })
      .catch(err => {
        reject(err)
      })
  })
}

export default {
  get,
  post,
  all
}
