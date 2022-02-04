/* eslint-disable no-useless-escape */
export function isValid(valid, fieldName, error) {
  return ({
    valid,
    fieldName,
    error
  })
}

const validation = {
  login: function (value, fieldName) {
    if (/^[a-zA-Z0-9]+$/.test(value) && value.length > 3)
      return isValid(true, fieldName, '');
    else {
      let error = 'You have entered an invalid login';
      return isValid(false, fieldName, error)
    }
  },

  isEmail: function (value, fieldName) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))
      return isValid(true, fieldName, '');
    else {
      let error = 'You have entered an invalid email address';
      return isValid(false, fieldName, error);
    }
  },

  password: function (value, fieldName) {
    if (/.*(?=.*\d)(?=.*[A-Z]).*/.test(value))
      return isValid(true, fieldName, '')
    else {
      let error = 'You have entered an invalid password';
      return isValid(false, fieldName, error)
    }
  },

  passwordLength: function (value, fieldName) {
    if (value.length < 7 || value.length > 18) {
      let error = 'Password should be 7-18 characters long';
      return isValid(false, fieldName, error);
    }
    return isValid(true, fieldName, '');
  },

  passwordConfirmation: function (firstPass, secondPass, fieldName) {
    if (firstPass === secondPass)
      return isValid(true, fieldName, '');
    else {
      let error = "Password you've entered doesn't match"
      return isValid(false, fieldName, error)
    }
  }
}

export default validation;