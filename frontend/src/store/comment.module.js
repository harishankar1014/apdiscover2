import CommentService from '../services/comment.services';

export const comment={
    namespaced: true,
    actions:{
        insert({ commit }, comment) {
            return CommentService.insertComments(comment).then(
              response => {
                commit('Insert Success');
                return Promise.resolve(response.data);
              },
              error => {
                commit('Insert Failure');
                return Promise.reject(error);
              }
            );
          },
          delete({ commit }, comment) {
            return CommentService.deleteComments(comment).then(
              response => {
                commit('Delete Success');
                return Promise.resolve(response.data);
              },
              error => {
                commit('Delete Failure');
                return Promise.reject(error);
              }
            );
          }
    }
};