import { StatusBar } from 'react-native';

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

export const request = (url, method = 'GET', body = '') => {
  
  const requestInfo = {
    method: method,
    headers: new Headers({
      'Content-type': 'application/json',
      'request_id': 'postmanRequest',
      'hardware_fingerprint': 'postmanRequest',
      'platform': 'Android',
      'os_version': '7.0.1',
      'app_version': '1.0.0',
      'phone_model': 'XT-1792',
      'phone_fabricator': 'Motorola',
    }),
    body: body,
  }

  const promise = new Promise((resolve, eject) => {
    fetch(url, requestInfo)
    .then(response => resolve(response.json()))
    .catch(response => reject(response.json()));
  })

  return promise;
}

export default getTimeFromDate;
