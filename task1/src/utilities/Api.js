
const Api = {
  signUp: user => {
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
          usersArr.push(user);
          let users = JSON.stringify(usersArr);
          localStorage.setItem("Users", users);
          return usersArr;
        } else if(result) console.log('Username or email has already been taken')

      } else {
        usersArr = [user];
        let users = JSON.stringify(usersArr);
        localStorage.setItem("Users", users);
        console.log('Registered successfuly');
        return usersArr;
      }
    })
  },

  login: user => {
    return fakeWait(3000).then(() => {
      let usersArr = JSON.parse(localStorage.getItem("Users"));
      console.log(usersArr);

      if (usersArr) {
        let result = usersArr.find(el =>
          user.name === el.name &&
          user.password === el.password
        );

        if (!result) {
          console.log('!result')
          return ({
            info: "user doesn't exist",
            currentUser: ''
          });
        } else {
          console.log('logged in')
          return ({
            info: 'logged in',
            currentUser: result
          });
        }
      } else {
        console.log('no such user')
        return ({
          info: "user doesn't exist",
          currentUser: ''
        })
      }
    })
  },

  addTodo: tasks => {
   

    // tasksArr.push(task);
    // let tasks = JSON.stringify(tasksArr);
    // localStorage.setItem("Tasks", tasks);
    
    
    
    
    localStorage.setItem('Tasks', JSON.stringify(tasks))

    JSON.parse(localStorage.getItem('Tasks'))
    console.log('Task added');
    // return tasksArr;
  }
}

function fakeWait(ms) {
  return new Promise((resolve, reject) => {
     setTimeout(resolve, ms);
  });
}

export default Api; 