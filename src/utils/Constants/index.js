const url = 'http://localhost:3000/v1/'

const prod ={
  url:{
    API_URL:'not sure yet',
    API_URL_USERS:'not sure yet'
  }

}
const dev ={
  url:{
    API_URL:'http://localhost:3000'
  }
}
export const config = process.env.NODE_ENV === 'development' ? dev : prod

export {url}
