export default function Api(sign, auth, currentUser) {

  function saveLoginData(signIn) {
      localStorage.setItem(signIn.email, JSON.stringify({ login: signIn.email, password: signIn.password, name: signIn.name }))
  }
  function logIn(sign) {
    const localValues = JSON.parse(localStorage.getItem(sign.login));
    if (localValues && sign.password === localValues.password) {
      auth(true);
      currentUser(JSON.parse(localStorage.getItem(sign.login)).login);
      console.log('Logged in')
    } console.log('Incorrect password!');
  }
  
  const value = Object.keys(sign).length > 2 ? saveLoginData : logIn;

  setTimeout(value, 3000, sign);
}