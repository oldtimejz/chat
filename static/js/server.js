import Axios from './axios'

const Service = {
  login: data => Axios.post('/api/user/login', data),

  RegisterUser: data => Axios.post('/api/user/reg', data)
}

export default  Service
