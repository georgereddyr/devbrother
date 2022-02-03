/* eslint-disable no-useless-escape */
export function isValid(valid, fieldName, error) {
  return ({
    valid,
    fieldName,
    error
  })
}

const validation = {
  login: function (string, fieldName, error) {
    if (/^[a-zA-Z0-9]+$/.test(string) && string.length > 3)
      return isValid(true, fieldName, '');
    else {
      error = 'You have entered an invalid login';
      return isValid(false, fieldName, error)
    }
  },

  isEmail: function (string, fieldName, error) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(string))
      return isValid(true, fieldName, '');
    else {
      error = 'You have entered an invalid email address';
      return isValid(false, fieldName, error);
    }
  },

  password: function (string, fieldName, error) {
    if (/.*(?=.*\d)(?=.*[A-Z]).*/.test(string))
      return isValid(true, fieldName, '')
    else {
      error = 'You have entered an invalid password';
      return isValid(false, fieldName, error)
    }
  },

  passwordLength: function (string, fieldName, error) {
    if (string.length < 7 || string.length > 18) {
      error = 'Password should be 7-18 characters long';
      return isValid(false, fieldName, error);
    }
    return isValid(true, fieldName, '');
  },

  passwordConfirmation: function (firstPass, secondPass, fieldName, error) {
    if (firstPass === secondPass)
      return isValid(true, fieldName, '');
    else {
      error = "Password you've entered doesn't match"
      return isValid(false, fieldName, error)
    }
  }
}

export default validation;