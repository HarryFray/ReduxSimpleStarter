export function selectBook(book) {
  // test with a log to confirm this is working!
  // selectbook is an action creator it needs to return an action
  // an obj with a type prop
  // and a PAYLOAD
  return {
    type: 'BOOK_SELECTED', // type is always uppercase
    payload: book
  };
};

