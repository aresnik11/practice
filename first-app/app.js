const axios = require('axios')

const getBreeds = async () => {
    try {
      return await axios.get('https://dog.ceo/api/breeds/list/all')
    }
    catch (error) {
      console.error(error)
    }
}

const printBreeds = async () => {
    const breeds = await getBreeds()
    if (breeds.data && breeds.data.message) {
        return breeds.data.message
    }
}

printBreeds()

// const getBreeds = () => {
//     try {
//       return axios.get('https://dog.ceo/api/breeds/list/all')
//     }
//     catch (error) {
//       console.error(error)
//     }
// }

// const printBreeds = async () => {
//     const breeds = getBreeds()
//     .then(response => {
//         if (response.data.message) {
//           return response.data.message
//         }
//       })
//     .catch(error => {
//     console.log(error)
//     })
// }

// console.log(printBreeds())