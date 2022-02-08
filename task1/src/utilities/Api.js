const Api = {
  signUp: (user) => {
    return fakeWait(3000).then(() => {
      let usersArr = JSON.parse(localStorage.getItem("Users"));
      console.log(usersArr);

      if (usersArr) {
        let result = usersArr.find(el =>
          user.name === el.name &&
          user.email === el.email &&
          user.password === el.password
        );

        if (!result) {
          let users = JSON.stringify(usersArr);
          usersArr.push(user);
          localStorage.setItem("Users", users);
          return usersArr;
        } else return "user already exists";

      } else {
        usersArr = [user];
        let users = JSON.stringify(usersArr);
        localStorage.setItem("Users", users)
      }
    })
  },

  login: (user) => {
    return fakeWait(3000).then(() => {
      let usersArr = JSON.parse(localStorage.getItem("Users"));
      console.log(usersArr);

      if (usersArr) {
        let result = usersArr.find(el =>
          user.name === el.name &&
          user.email === el.email &&
          user.password === el.password
        );

        if (!result) {
          return ({
            info: "user doesn't exist",
            currentUser: ''
          });
        } else {
          return ({
            info: 'registered successfuly',
            currentUser: result
          });
        }
      } else {
        return ({
          info: 'user doesnt exist',
          currentUser: ''
        })
      }
    })
  }
}

function fakeWait(ms) {
  return new Promise((resolve, reject) => {
     setTimeout(resolve, ms);
  });
}

export default Api;