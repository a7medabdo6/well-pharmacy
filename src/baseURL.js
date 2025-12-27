import axios from 'axios'


const baseUrl = axios.create({ baseURL: "https://egapteka.com" })

export default baseUrl