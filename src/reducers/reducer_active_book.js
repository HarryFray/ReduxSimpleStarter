export default function (state = null, action) {
  switch (action.type) {
    case 'BOOK_SELECTED': return action.payload;
  }
  // do not mutate state here... must be pure
  return state;
}

// reducers always get two params
// state arg is not app state just state
// this reducer deals with
