import {connectingString} from './connectingString'
const URL = connectingString
const axios = require('axios')



//post a leopards
export const postLeapords = (obj) => {
    return new Promise((resolve, reject) => {
        var url = URL + "sales-leopards/"
        axios.post(url,obj)
        .then(function (response) {
            // handle success
        const data = response.data.results;
        let updatedData = data
        resolve(updatedData)
        })
        .catch(function (error) {
            // handle error
            console.log(error)
            let updatedData = error.message
            resolve(updatedData)
        })
      })   
}

//post a purchase 
export const postPurchase = (obj) => {
    console.log(obj)
    return new Promise((resolve, reject) => {
        var url = URL + "purchase"
        axios.post(url,obj)
        .then(function (response) {
            // handle success
        const data = response.data.results;
        let updatedData = data
        resolve(updatedData)
        })
        .catch(function (error) {
            // handle error
            console.log(error)
            let updatedData = error.message
            resolve(updatedData)
        })
      })   
}

export const postNewArrivals = (obj) => {
    return new Promise((resolve, reject) => {
        var url = URL + "/cms/new-arrival"
        axios.post(url,obj)
        .then(function (response) {
            // handle success
        const data = response.data.results;
        let updatedData = data
        resolve(updatedData)
        })
        .catch(function (error) {
            // handle error
            console.log(error)
            let updatedData = error.message
            resolve(updatedData)
        })
      })   
}
//Register a Product
export const postProduct = (obj) => {
    return new Promise((resolve, reject) => {
        var url = URL + "products/"
        axios.post(url,obj)
        .then(function (response) {
            // handle success
        const data = response.data.results;
        let updatedData = data
        resolve(updatedData)
        })
        .catch(function (error) {
            // handle error
            console.log(error)
            let updatedData = error.message
            resolve(updatedData)
        })
      })   
}

export const postTempPicture = (obj) => {
    return new Promise((resolve, reject) => {
        var url = URL + "products-upload/"
        axios.post(url,obj)
        .then(function (response) {
            // handle success
        const data = response.data.results;
        let updatedData = data
        resolve(updatedData)
        })
        .catch(function (error) {
            // handle error
            console.log(error)
            let updatedData = error.message
            resolve(updatedData)
        })
      })   
}

//Register a Att
export const postAttribute = (obj) => {
    return new Promise((resolve, reject) => {
        var url = URL + "attributes/"
        axios.post(url,obj)
        .then(function (response) {
            // handle success
        const data = response.data.results;
        let updatedData = data
        resolve(updatedData)
        })
        .catch(function (error) {
            // handle error
            console.log(error)
            let updatedData = error.message
            resolve(updatedData)
        })
      })   
}

//Register a SubAtt
export const postSubAttribute = (obj) => {
    return new Promise((resolve, reject) => {
        var url = URL + "attributes-details/"
        axios.post(url,obj)
        .then(function (response) {
            // handle success
        const data = response.data.results;
        let updatedData = data
        resolve(updatedData)
        })
        .catch(function (error) {
            // handle error
            console.log(error)
            let updatedData = error.message
            resolve(updatedData)
        })
      })   
}

//Register a Category
export const postCategory = (obj) => {
    return new Promise((resolve, reject) => {
        var url = URL + "categories/"
        axios.post(url,obj)
        .then(function (response) {
            // handle success
        const data = response.data.results;
        let updatedData = data
        resolve(updatedData)
        })
        .catch(function (error) {
            // handle error
            console.log(error)
            let updatedData = error.message
            resolve(updatedData)
        })
      })   
}

// post final product object
export const postNewProduct = (obj) => {
    return new Promise((resolve, reject) => {
        var url = URL + "products/"
        console.log(url)
        axios.post(url,obj)
        .then(function (response) {
            // handle success
            console.log(response)
        const data = response.data.results;
        let updatedData = data
        resolve(updatedData)
        })
        .catch(function (error) {
            // handle error
            console.log(error)
            let updatedData = false
            resolve(updatedData)
        })
      })   
}

