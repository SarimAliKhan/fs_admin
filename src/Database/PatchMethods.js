import {connectingString} from './connectingString'
const URL = connectingString
const axios = require('axios')

//update resume payments
export const updateProduct = (id,obj) => {
    return new Promise((resolve, reject) => {
        var url = URL + "products/" + id
        axios.patch(url,obj)
        .then(function (response) {
        const data = response.data.results;
        let updatedData = data
        resolve(updatedData)
        })
        .catch(function (error) {
            // handle error
            let updatedData = error.message
            resolve(updatedData)
        })
      })   
}
export const updateProductImage = (id,obj) => {
    return new Promise((resolve, reject) => {
        var url = URL + "products-image/" + id
        axios.patch(url,obj)
        .then(function (response) {
        const data = response.data.results;
        let updatedData = data
        resolve(updatedData)
        })
        .catch(function (error) {
            // handle error
            let updatedData = error.message
            resolve(updatedData)
        })
      })   
}

export const updateImage = (id,obj) => {
    return new Promise((resolve, reject) => {
        var url = URL + "product-images/" + id
        axios.patch(url,obj)
        .then(function (response) {
        const data = response.data.results;
        let updatedData = data
        resolve(updatedData)
        })
        .catch(function (error) {
            // handle error
            let updatedData = error.message
            resolve(updatedData)
        })
      })   
}

export const deleteArrivals= (id,obj) => {
    return new Promise((resolve, reject) => {
        var url = URL + "/cms/new-arrival/delete/" + id
        axios.patch(url,obj)
        .then(function (response) {
        const data = response.data.results;
        let updatedData = data
        resolve(updatedData)
        })
        .catch(function (error) {
            // handle error
            let updatedData = error.message
            resolve(updatedData)
        })
      })   
}
export const uploadArrivals= (id,obj) => {
    return new Promise((resolve, reject) => {
        var url = URL + "/cms/new-arrival/" + id
        axios.patch(url,obj)
        .then(function (response) {
        const data = response.data.results;
        let updatedData = data
        resolve(updatedData)
        })
        .catch(function (error) {
            // handle error
            let updatedData = error.message
            resolve(updatedData)
        })
      })   
}