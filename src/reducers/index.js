import { combineReducers } from 'redux';
import WordsReducer from './reducer_words'

const rootReducer = combineReducers({
  words: WordsReducer
});

export default rootReducer;
