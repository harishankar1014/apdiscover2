import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/test/';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }
  userStatus(ustatus) {
    return axios.post(API_URL + 'changestatus', {
      status: ustatus,
    });
  }
  hidecomponents(hide){
    return axios.post(API_URL+'hideapps',{
      hideapp: hide
    }).then(response => {
      return response.data;
    });
  }
  uploadimg(username,img){
    return axios.post(API_URL+'uploadimg',{
      avatar:img,
      username:username
    }).then(response=>{
      return response.data;
    })
  }
  changepwd(user) {
    return axios
      .post(API_URL+'changepwd', {
        username: user.username,
        password: user.password
      })
      .then(response => {
        return response.data;
      });
  }
  checkBlocked(username){
    return axios.post(API_URL + 'checkblocked', {
      username: username,
    });
  }
  getAllUsers(){
    return axios.get(API_URL+'alluser',{headers: authHeader()});
  }
  setColor(color){
    return axios.post(API_URL + 'changecolor', {
      color: color
    });
  }
  changemail(user){
    return axios.post(API_URL+'changemail',{
      username: user.username,
      mail: user.email
    })
  }
  getColor(){
    return axios.get(API_URL+'color',{header: authHeader()});
  }
  getApps(){
    return axios.get(API_URL+ 'getapps',{headers: authHeader()})
  }
  getUserBoard() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }
  getModeratorBoard() {
    return axios.get(API_URL + 'mod', { headers: authHeader() });
  }
  getTest(){
    return axios.get('http://localhost:8080/api/viewapi' );
}
getRequest(username){
  return axios.post(API_URL+'request',{username:username});
}
sendnew(data){
  return axios.post(API_URL+'whatsnew',{
    whatsdata:data
  })
}
getwhats(){
  return axios.get(API_URL+'getwhats',{headers:authHeader()});
}
deletewhats(id){
  return axios.post(API_URL+'deletewhats',{whatsid:id})
}
getApiAccess(permission,user,username){
  return axios.post(API_URL+'permission',{apipermission: permission,
    user:user,
  username:username})
}
checkToken(currentUser){
  return axios.post(API_URL+'checkToken',{username:currentUser});
}
tryme(currentUser){
  return axios.post(API_URL+'tryme',{username:currentUser});
}
  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }
  checkaccess(apiname,username){
    return axios.post(API_URL + 'checkaccess', { apiname: apiname,
    username:username
   });
  }
}

export default new UserService();
