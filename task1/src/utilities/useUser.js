/* eslint-disable no-unused-vars */
import { useState } from 'react';

export default function useUser() {
  const getUser = () => {
    const userString = localStorage.getItem('currentUser');
    const userData = JSON.parse(userString);
    return userData?.localStorageToken
  };
  
  const [user, setUser] = useState(getUser());

  const saveUser = userInfo => {
    if(userInfo) {
      localStorage.setItem('currentUser', JSON.stringify(userInfo));
      
    } else {
      localStorage.removeItem('currentUser')
    }
    setUser(userInfo.localStorageToken);
  };

  return {
    setUser: saveUser,
    user
  }
}

//allusers = []
//currentuser = {}