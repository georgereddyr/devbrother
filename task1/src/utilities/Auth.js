/* eslint-disable import/no-anonymous-default-export */
const TOKEN_KEY = 'localStorage';

export default {

  isAuthenticated: () => localStorage.getItem(TOKEN_KEY) !== null,

  getToken: () => localStorage.getItem(TOKEN_KEY),

  login: token => {
    localStorage.setItem(TOKEN_KEY, token);
    return new Promise();

  },

  logout: () => {
   localStorage.removeItem(TOKEN_KEY)
  },

  signUp: () => {

  }
};

//keys: 
//users, currentUsers