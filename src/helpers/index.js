import { StatusBar, AsyncStorage } from 'react-native';
import { storedLogin } from '@redux/authentication/actions'
import { store } from '../index';

export const setStatusBarStyle = style => {
  if (style === 'dark') {
    StatusBar.setBarStyle('dark-content');
  } else if (style === 'white') {
    StatusBar.setBarStyle('light-content');
  } else {
    StatusBar.setBarStyle('default');
  }
};

const _buildDefaultHeaders = token => {
  return new Headers({
    'Content-type': 'application/json',
    token,
    request_id: 'postmanRequest',
    hardware_fingerprint: 'postmanRequest',
    platform: 'Android',
    os_version: '7.0.1',
    app_version: '1.0.0',
    phone_model: 'XT-1792',
    phone_fabricator: 'Motorola',
  });
};

const requestInfo = (method = 'GET', body = '', token = store.getState().authentication.token) => {
  return({
    method,
    body,
    headers: _buildDefaultHeaders(token),
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
  let loggedIn = false;

  try {
    const value = await AsyncStorage.getItem('@iGuess:authentication');
    if (value !== null){
      // Token exists in device local storage
      let info = requestInfo(undefined, undefined, value);
      const response = await request('https://iguess-666666.appspot.com/token/verify', info);

      // If token still valid
      if (response.valid === true) {
        store.dispatch(storedLogin(value));
        loggedIn = true;
      } else {
        // Reset token in local storage
        setStoredToken('');
      }
    } 
  } catch (error) {
    // Error retrieving data
  }

  return loggedIn;
}

export async function setStoredToken(token) {
  try {
    await AsyncStorage.setItem('@iGuess:authentication', token);
  } catch (error) {
    console.log('Error saving data', error);
  }
}
