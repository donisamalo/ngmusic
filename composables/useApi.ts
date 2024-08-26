import axios from 'axios'

// Create an Axios instance
const api = axios.create({
  baseURL: process.env.NUXT_API_BASE_URL || 'https://itunes.apple.com',
  headers: {
    'Content-Type': 'application/json',
  },
})

// Add a request interceptor if needed
api.interceptors.request.use(
  (config) => {
    // Modify the config if needed (e.g., add authorization headers)
    return config
  },
  (error) => {
    // Handle request errors
    return Promise.reject(error)
  }
)

// Add a response interceptor if needed
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle response errors
    return Promise.reject(error)
  }
)

const useApi = () => {
  const getData = async (endpoint: string, params = {}) => {
    try {
      const response = await api.get(endpoint, { params })
      return response.data
    } catch (error) {
      throw error
    }
  }

  return {
    getData,
  }
}

export default useApi
