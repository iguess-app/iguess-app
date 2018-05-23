import * as types from './actionTypes';
import { get } from '@helpers';

export function fetchLines() {
  const mockedGames = [
    { key: 'Brazil', homeGuess: 1, awayGuess: 2 },
    { key: 'Germany', homeGuess: 2, awayGuess: 1 },
    { key: 'Italy', homeGuess: 5, awayGuess: 0 },
  ];

  get('https://iguess-666666.appspot.com/guessline/getGuessLine').then(
    response => console.log(response),
  );

  return { type: types.LINE_FETCHED, payload: mockedGames };
}
