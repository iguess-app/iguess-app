import * as types from './actionTypes';

export const updateLeagueName = name => ({
  type: types.UPDATE_LEAGUE_NAME,
  payload: { name },
});

export const updateAddedFriends = addedFriends => ({
  type: types.UPDATE_ADDED_FRIENDS,
  payload: { addedFriends },
});
