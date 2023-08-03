import Cookies from 'js-cookie';

export const setCookieDetails = (authenticationDetails) => {
  Cookies.set('username', authenticationDetails.username);
  Cookies.set('role', authenticationDetails.type);
  Cookies.set('jwtToken', authenticationDetails.jwtToken);
};

export const getCookieObject = () => {
  const authenticationObj = {
    name: Cookies.get('name'),
    emailId: Cookies.get('emailId'),
    role: Cookies.get('role'),
    jwtToken: Cookies.get('jwtToken'),
  };
  return authenticationObj;
};

export const removeAllCookies = () => {
  Cookies.remove('username');
  Cookies.remove('role');
  Cookies.remove('jwtToken');
};

export const userNameValidation = (userName) => {
  let validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (userName.match(validRegex)) {
    return true;
  } else {
    return false;
  }
};

const checkValidityOfPassword = (password, confirmPassword) => {
  if (
    password &&
    confirmPassword &&
    password.length > 7 &&
    confirmPassword.length > 7 &&
    password === confirmPassword
  ) {
    return true;
  }
  return false;
};

export const signUpValidations = (userName, password, confirmPassword) => {
  if (userNameValidation(userName)) {
    if (password && password.length > 7) {
      if (password === confirmPassword) {
        return {
          valid: true,
          message: "nothing",
        };
      } else {
        return {
          valid: false,
          message: "Password and confirm password should match.",
        };
      }
    } else {
      return {
        valid: false,
        message: "Password should be of length greater then or equal to 8",
      };
    }
  } else {
    return {
      valid: false,
      message: "Please provide valid email address",
    };
  }
};

