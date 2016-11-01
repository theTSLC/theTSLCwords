import { combineReducers } from 'redux';
import WordsReducer from './reducer_words';
import ActiveWordReducer from './reducer_active_word';

const rootReducer = combineReducers({
	// any key we add to our combineReducers ends up as a key on our global state  
  words: WordsReducer,
  activeWord: ActiveWord
});

export default rootReducer;
