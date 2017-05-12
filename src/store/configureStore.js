import configureStoreProd from './configureStore.prod'
import configureStoreDev from './configureStore.dev'

let configure

if(process.env.NODE_ENV == 'prod'){
  configure = configureStoreProd()
}else{
  configure = configureStoreDev()
}

export default configure
