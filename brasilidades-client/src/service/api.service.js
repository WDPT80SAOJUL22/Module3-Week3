import axios from 'axios'

class Api {
  constructor() {
    this.api = axios.create({
      baseURL: 'http://localhost:5005/',
    })

    this.api.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem('token')
        if (token) {
          config.headers = {
            Authorization: `Bearer ${token}`,
          }
        }
        return config
      },
      (error) => {
        console.log(error)
      }
    )

    this.api.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response.status === 401) {
          localStorage.removeItem('token')
          window.location = '/'
        }
        throw error
      }
    )
  }

  login = async (loginInfo) => {
    try {
      const { data } = await this.api.post('/login', loginInfo)
      localStorage.setItem('token', data.token)
    } catch (error) {
      throw error.response.data.message
    }
  }

  getPersonalities = async (region) => {
    try {
      const { data } = await this.api.get(`/personalities/${region}`)
      return data
    } catch (error) {
      console.log(error)
    }
  }

  uploadImage = async (id, file) => {
    const formData = new FormData()
    formData.append('image', file)
    try {
      const { data } = await this.api.put(
        `/personalities/${id}/image-upload`,
        formData
      )
      return data
    } catch (error) {
      throw error
    }
  }
}

export default new Api()
