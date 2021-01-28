import {connectingString} from './connectingString'
const URL = connectingString
const axios = require('axios')

//delete Degrees
export const deleteImage = (imageId) => {
    return new Promise((resolve, reject) => {
        var url = URL + "products-image/" + imageId
     //   console.log(url)
        axios.delete(url)
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