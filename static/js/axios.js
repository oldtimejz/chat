import axios from 'axios'

const baseUrl = '';

const instance = axios.create();

instance.defaults.timeout = 20000;

instance.interceptors.request.use(async config => {
  console.log(config.url)
  if(config.url && config.url.charAt(0) === '/'){
    config.url = `${baseUrl}${config.url}`
  }
  return config
}, error => Promise.reject(error) );

instance.interceptors.response.use(response => {
  if(response.status == 200){
    return response;
  }
},error => {
  if(error){
    console.log(error)
  }else {
    console.log('无法加载')
  }
  return Promise.reject(error);
})
export default instance
