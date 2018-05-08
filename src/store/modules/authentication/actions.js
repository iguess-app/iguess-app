import * as types from './actionTypes';
import { setStoredToken } from '@helpers';

export function login(token) {
  setStoredToken(token);
  return { type: types.LOGIN, token }
}

export function storedLogin(token) {
  return { type: types.LOGIN, token }
}

export function logout() {
  const EMPTY_TOKEN = '';
  setStoredToken(EMPTY_TOKEN);
  return { type: types.LOGOUT, token: EMPTY_TOKEN }
}

