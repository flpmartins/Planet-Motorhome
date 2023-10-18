import { enviroments } from "../../../environments"

export const requestInterceptor = (request) => {

  const app = JSON.parse(localStorage.getItem(enviroments.APP_NAME))


  if (app && app.token) {
    request.headers.Authorization = `Bearer ${app.token} `
  }
  return request
}