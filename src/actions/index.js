export function selectWord(word) {
	// selectWord is an Action Creator, needs to return an action, i.e., an object with a type property
  return {
  	type: 'WORD_SELECTED',
  	payload: word
  };
}