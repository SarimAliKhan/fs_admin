import {connectingString} from './connectingString'
const URL = connectingString
const axios = require('axios')


export const getPurchases= () => {
    return new Promise((resolve, reject) => {
        var url = URL + `purchase`
        axios.get(url)
        .then(function (response) {
        const data = response.data.results;
        let updatedData = data
        resolve(updatedData)
        })
        .catch(function (error) {
            // handle error
            let updatedData = false
            resolve(updatedData)
        })
      }) 
  };

  export const getNewArrivals= () => {
    return new Promise((resolve, reject) => {
        var url = URL + `cms/new-arrival`
        axios.get(url)
        .then(function (response) {
        const data = response.data.results;
        let updatedData = data
        resolve(updatedData)
        })
        .catch(function (error) {
            // handle error
            let updatedData = false
            resolve(updatedData)
        })
      }) 
  };




//get Sales
export const getSales = () => {
    return new Promise((resolve, reject) => {
        var url = URL + `sales`
        axios.get(url)
        .then(function (response) {
        const data = response.data.results;
        let updatedData = data
        resolve(updatedData)
        })
        .catch(function (error) {
            // handle error
            let updatedData = false
            resolve(updatedData)
        })
      }) 
  };



//Get Sale Details
export const getSaleDetails = (saleId) => {
    return new Promise((resolve, reject) => {
        var url = URL + `sales-details/${saleId}`
        axios.get(url)
        .then(function (response) {
        const data = response.data.results;
        let updatedData = data
        resolve(updatedData)
        })
        .catch(function (error) {
            // handle error
            let updatedData = false
            resolve(updatedData)
        })
      })   
  }

//Get Product Names
export const getProductNames = () => {
    return new Promise((resolve, reject) => {
        var url = URL + "product-names"
        axios.get(url)
        .then(function (response) {
        const data = response.data.results;
        let updatedData = data
        resolve(updatedData)
        })
        .catch(function (error) {
            // handle error
            let updatedData = false
            resolve(updatedData)
        })
      })   
}
// Get all purchases
export const allPurchases = () => {
    return new Promise((resolve, reject) => {
        var url = URL + "purchase"
        axios.get(url)
        .then(function (response) {
        const data = response.data.results;
        let updatedData = data
        resolve(updatedData)
        })
        .catch(function (error) {
            // handle error
            let updatedData = false
            resolve(updatedData)
        })
      })   
}
//Get All Users
export const getUsers = () => {
    return new Promise((resolve, reject) => {
        var url = URL + "users"
        axios.get(url)
        .then(function (response) {
            // handle success
        const data = response.data.results;
        let updatedData = data
        resolve(updatedData)
        })
        .catch(function (error) {
            // handle error
            let updatedData =false
            resolve(updatedData)
        })
      })   
}

export const getCollections = () => { 
    return new Promise((resolve, reject) => {
    var url = URL + "collections"
    axios.get(url)
    .then(function (response) {
        // handle success
    const data = response.data.results;
    let updatedData = data
    resolve(updatedData)
    })
    .catch(function (error) {
        // handle error
        let updatedData =false
        resolve(updatedData)
    })
  })
}

//Get a Users
export const getSpecificUsers = (id) => {
    return new Promise((resolve, reject) => {
        var url = URL + "users/" + id
        axios.get(url)
        .then(function (response) {
            // handle success
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

//Get Products
export const getProducts = (val) => {
    return new Promise((resolve, reject) => {
        var url = URL + `products?deactivated=${val}`
        axios.get(url)
        .then(function (response) {
            // handle success
        const data = response.data.results;
        let updatedData = data
        resolve(updatedData)
        })
        .catch(function (error) {
            // handle error
            let updatedData = false
            resolve(updatedData)
        })
      })   
}

// Get The stock
export const getStock = () => {
    return new Promise((resolve, reject) => {
        var url = URL + `product-stock`
        axios.get(url)
        .then(function (response) {
            // handle success
        const data = response.data.results;
        let updatedData = data
        resolve(updatedData)
        })
        .catch(function (error) {
            // handle error
            let updatedData = false
            resolve(updatedData)
        })
      })   
}
//Get a Product
export const getProduct = (id) => {
    return new Promise((resolve, reject) => {
        var url = URL + `products/${id}`
        axios.get(url)
        .then(function (response) {
            // handle success
        const data = response.data.results;
        let updatedData = data
        resolve(updatedData)
        })
        .catch(function (error) {
            // handle error
            let updatedData = false
            resolve(updatedData)
        })
      })  
}
export const adminLogin = (email,password) => {
    return new Promise((resolve, reject) => {
        var url = URL + `users/admin-login?email=${email}&password=${password}`
        axios.get(url)
        .then(function (response) {
            // handle success
        const data = response.data.results;
        let updatedData = data
        resolve(updatedData)
        })
        .catch(function (error) {
            // handle error
            let updatedData = false
            resolve(updatedData)
        })
      })  
}

export const getAttributes = () => {
    return new Promise((resolve, reject) => {
        var url = URL + `attributes`
        axios.get(url)
        .then(function (response) {
            // handle success
        const data = response.data.results;
        let updatedData = data
        resolve(updatedData)
        })
        .catch(function (error) {
            // handle error
            let updatedData = false
            resolve(updatedData)
        })
      })  
}

export const getAttributesDetails = () => {
    return new Promise((resolve, reject) => {
        var url = URL + `attributes-details`
        axios.get(url)
        .then(function (response) {
            // handle success
        const data = response.data.results;
        let updatedData = data
        resolve(updatedData)
        })
        .catch(function (error) {
            // handle error
            let updatedData = false
            resolve(updatedData)
        })
      })  
}
export const getAttributesDetailsSingle = (id) => {
    return new Promise((resolve, reject) => {
        var url = URL + `attributes-details/${id}`
        axios.get(url)
        .then(function (response) {
            // handle success
        const data = response.data.results;
        let updatedData = data
        resolve(updatedData)
        })
        .catch(function (error) {
            // handle error
            let updatedData = false
            resolve(updatedData)
        })
      })  
}

export const getCategory = () => {
    return new Promise((resolve, reject) => {
        var url = URL + `categories`
        axios.get(url)
        .then(function (response) {
            // handle success
        const data = response.data.results;
        let updatedData = data
        resolve(updatedData)
        })
        .catch(function (error) {
            // handle error
            let updatedData = false
            resolve(updatedData)
        })
      })  
}


export const getImages = () => {
    return new Promise((resolve, reject) => {
        var url = URL + `product-gallery`
        axios.get(url)
        .then(function (response) {
            // handle success
        const data = response.data.results;
        let updatedData = data
        resolve(updatedData)
        })
        .catch(function (error) {
            // handle error
            let updatedData = false
            resolve(updatedData)
        })
      })  
}


export const getParticularPurchase = (id) => {
    return new Promise((resolve, reject) => {
        var url = URL + `product-purchase/${id}`
        axios.get(url)
        .then(function (response) {
            // handle success
        const data = response.data.results;
        let updatedData = data
        resolve(updatedData)
        })
        .catch(function (error) {
            // handle error
            let updatedData = false
            resolve(updatedData)
        })
      })  
}
