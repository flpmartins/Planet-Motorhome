export const requestInterceptor = (request) => {

  const app = JSON.parse(localStorage.getItem('@planetmotorhome'))


  if (app && app.token) {
    request.headers.Authorization = `Bearer ${app.token} `
  }
  return request
}