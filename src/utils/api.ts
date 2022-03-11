import Axios, { AxiosInstance } from 'axios'

declare interface CustomAxiosInstance extends AxiosInstance {
  getMedia: (media: { url: string }) => string,
  serializeJSON?: (data: any) => string
}
// @ts-ignore
const api: CustomAxiosInstance = Axios.create({
  baseURL: process.env.REACT_APP_API_URL
})


export const storeJwtToken = (token: string) => {
  try {
    localStorage.setItem('@jwtToken', token)
  } catch (e) {
    // saving error
  }
}

export const clearJwtToken = () => {
  try {
    localStorage.setItem('@jwtToken', "")
    // @ts-ignore
    delete api.defaults.headers["Authorization"]
  } catch (e) {
    // saving error
  }
}

export const getJwtToken = () => {
  try {
    const value: string | null = localStorage.getItem('@jwtToken')
    if (value !== null) {
      // value previously stored
      return value
    }
  } catch (e) {
    // error reading value
    return null
  }
}

export const setAuthorization = (jwtToken: string) => {
  console.log("setting Auth ", jwtToken)
  if (jwtToken) {
    // @ts-ignore
    api.defaults.headers["Authorization"] = "Bearer " + jwtToken
  }
}

//menual.getMedia = 
api.getMedia = (media: { url: string }) => {

  if (!media)
    return " "
    
  if (media.url.indexOf("http") >= 0) {
    return media.url
  }
  const url = api.defaults.baseURL + media.url
  //console.log("getMedia url = ", url)
  return url;
}

export {
  api,
}