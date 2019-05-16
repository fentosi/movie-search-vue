import axios from 'axios'

const baseDomain = 'http://www.omdbapi.com'
const baseUrl = `${baseDomain}/`

export default {
  baseUrl,
  apiKey: process.env.VUE_APP_OMDB_API_KEY,
  search (searchTerm) {
    return axios.get(this.baseUrl, {
      params: {
        s: searchTerm,
        apiKey: this.apiKey
      }
    })
  }
}
