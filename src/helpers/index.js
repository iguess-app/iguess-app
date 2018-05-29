import { StatusBar, AsyncStorage } from 'react-native';
import { storedLogin } from '@redux/authentication/actions';
import { store } from '../index';
import DeviceInfo from 'react-native-device-info';
import { getLanguages } from 'react-native-i18n';

export const setStatusBarStyle = style => {
  if (style === 'dark') {
    StatusBar.setBarStyle('dark-content');
  } else if (style === 'white') {
    StatusBar.setBarStyle('light-content');
  } else {
    StatusBar.setBarStyle('default');
  }
};

const getLocale = () => {
  if (DeviceInfo.getDeviceLocale().includes('pt')) {
    return 'pt-br';
  } else {
    return 'en-us';
  }
};

const _buildDefaultHeaders = token => {
  return new Headers({
    'Content-type': 'application/json',
    token,
    request_id: DeviceInfo.getUniqueID() + Date.now(),
    hardware_fingerprint: DeviceInfo.getUniqueID(),
    platform: DeviceInfo.getSystemName(),
    os_version: DeviceInfo.getSystemVersion(),
    app_version: DeviceInfo.getVersion(),
    phone_model: DeviceInfo.getModel(),
    phone_fabricator: DeviceInfo.getBrand(),
    language: getLocale(),
  });
};

const requestInfo = (
  method = 'GET',
  body,
  token = store.getState().authentication.token,
) => {
  return {
    method,
    body,
    headers: _buildDefaultHeaders(token),
  };
};

export const handleIsoDate = date => {
  return date.replace('+', '%2b');
};

export const post = (url, body) => {
  let info = requestInfo('POST', JSON.stringify(body));
  return request(url, info);
};

export const get = url => {
  return request(url, requestInfo());
};

export const apiDelete = url => {
  let info = requestInfo('DELETE');
  return request(url, info);
};

export const put = (url, body) => {
  let info = requestInfo('PUT', JSON.stringify(body));
  return request(url, info);
};

const request = (url, info) => {
  const promise = new Promise((resolve, reject) => {
    fetch(handleIsoDate(url), info)
      .then(response => resolve(response.json()))
      .catch(() => reject());
  });

  return promise;
};

export async function loginWithStoredToken() {
  let loggedIn = false;

  try {
    const value = await AsyncStorage.getItem('@iGuess:authentication');
    if (value !== null) {
      // Token exists in device local storage
      let info = requestInfo(undefined, undefined, value);
      const response = await request(
        'https://iguess-666666.appspot.com/token/verify',
        info,
      );

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
    throw new Error('Error saving stored token locally.');
  }
}
