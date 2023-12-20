import axios from 'axios'
import { enviroments } from '../../environments'
import { requestInterceptor } from './interceptors/request_interceptors'

const api = axios.create({
  baseURL: enviroments.URL_API_PLANETMOTORHOME,
})

api.interceptors.request.use((request) => requestInterceptor(request))

export { api }