import axios from 'axios';
// import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/';

class CommentService{
    getPublicContent() {
        return axios.get(API_URL + 'all');
      }

    getTest(){
        return axios.post(API_URL + 'view', { "title":"one" });
    }
    getComments() {
        return axios
          .post(API_URL + 'view', {
            title:"one"
            // password: user.password
          })
          .then(response => {
            if (response.data.accessToken) {
              localStorage.setItem('comment', JSON.stringify(response.data));
            }
    
            return response.data;
          });
      }
      insertComments(comment) {
        return axios.post(API_URL + 'insert', {
          title: comment.title,
          comment: comment.comment
          // password: user.password
        });
      }
      deleteComments(id) {
        return axios.post(API_URL + 'delete', {
          id: id
          // comment: comment.comment
          // password: user.password
        });
      }
}
export default new CommentService();