// all reducers get 2 arguments: current state and action; only ever called when action occurs
// state argument is not application state, but rather, only the state this reducer is responsible for
export default function(state = null, action) {
  switch(action.type) {
    case: 'WORD_SELECTED':
      return action.payload;
  }

  return state;
}