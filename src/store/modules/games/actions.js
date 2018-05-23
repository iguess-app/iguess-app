import * as types from './actionTypes';

export function fetchGames() {
  const mockedGames = [
    { key: 'Brazil', homeGuess: 1, awayGuess: 2 },
    { key: 'Germany', homeGuess: 2, awayGuess: 1 },
    { key: 'Italy', homeGuess: 5, awayGuess: 0 },
  ];
  return { type: types.GAMES_FETCHED, gamesByKey: mockedGames };
}
