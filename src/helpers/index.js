import { StatusBar, AsyncStorage } from 'react-native';
import { storedLogin } from '@redux/authentication/actions'
import { store } from '../index';

// Will be deleted
// The data should be retrieved from the API
// with correct formatation
export const getTimeFromDate = ISODate => {
  return ISODate.slice(11, 16)
    .replace(':', 'H ')
    .concat('M');
};

// WARNING - Year isn't considered
// Possible returns:
// 1 - Tomorrow or +
// 0 - Today
// -1 - Yesterday or +
export const compareDateWithToday = ISODate => {
  const date = new Date(ISODate);
  const now = new Date();

  let monthComparison = date.getMonth() - now.getMonth();

  if (monthComparison > 0) {
    return 1;
  } else if (monthComparison < 0) {
    return -1;
  } else {
    // do nothing
  }

  let dayComparison = date.getUTCDate() - now.getUTCDate();

  if (dayComparison > 0) {
    return 1;
  } else if (dayComparison < 0) {
    return -1;
  }

  return 0;
};

export const setStatusBarStyle = style => {
  if (style === 'dark') {
    StatusBar.setBarStyle('dark-content');
  } else if (style === 'white') {
    StatusBar.setBarStyle('light-content');
  } else {
    StatusBar.setBarStyle('default');
  }
};

const requestInfo = (method = 'GET', body = '', token = store.getState().authentication.token) => {
  return({method: method,
    headers: new Headers({
      'Content-type': 'application/json',
      'request_id': 'postmanRequest',
      'token': token,
      'hardware_fingerprint': 'postmanRequest',
      'platform': 'Android',
      'os_version': '7.0.1',
      'app_version': '1.0.0',
      'phone_model': 'XT-1792',
      'phone_fabricator': 'Motorola',
    }),
    body: body,

  })
}

export const post = (url, body) => {
  let info = requestInfo('POST', body);
  return request(url, info);
}

export const get = (url) => {
  return request(url, requestInfo());
}

export const apiDelete = (url) => {
  let info = requestInfo('DELETE');
  return request(url, info);
}


const request = (url, info) => {

  const promise = new Promise((resolve, reject) => {
    fetch(url, info)
    .then(response => resolve(response.json()))
    .catch(response => reject());
  });

  return promise;
}

export async function loginWithStoredToken() {
  try {
    const value = await AsyncStorage.getItem('@iGuess:authentication');
    if (value !== null){
      // Token exists
      let info = requestInfo(undefined, undefined, value);
      const response = await request('https://iguess-666666.appspot.com/token/verify', info);

      console.log('RESPONSE::', response);

      if (response.valid === true) {
        store.dispatch(storedLogin(value));
      }
    } 
  } catch (error) {
    // Error retrieving data
  }
}

export async function setStoredToken(token) {
  try {
    await AsyncStorage.setItem('@iGuess:authentication', token);
  } catch (error) {
    console.log('Error saving data', error);
  }
}