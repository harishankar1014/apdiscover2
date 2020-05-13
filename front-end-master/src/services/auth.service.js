import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth/';

class AuthService {
  login(user) {
    return axios
      .post(API_URL + 'signin', {
        username: user.username,
        password: user.password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
      });
  }
  reset(user) {
    return axios
      .post(API_URL + 'reset', {
        username: user.username
      })
      .then(response => {
        return response.data;
      });
  }
  otp(user) {
    return axios
      .post(API_URL + 'otp', {
        username: user.username,
        otp: user.otp,
      })
      .then(response => {
        return response.data;
      });
  }
  
  logout() {
    localStorage.removeItem('user');
  }

  register(user) {
    return axios.post(API_URL + 'signup', {
      username: user.username,
      email: user.email,
      password: user.password
    });
  }
}

export default new AuthService();
