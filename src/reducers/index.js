import { combineReducers } from 'redux';
import WordsReducer from './reducer_words'

const rootReducer = combineReducers({
	// adds a key to our global application state, named words, where the value is whatever gets returned from WordsReducer  
  words: WordsReducer
});

export default rootReducer;
