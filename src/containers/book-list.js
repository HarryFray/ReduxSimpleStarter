import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'; // connects react views with redux state
import { selectBook } from '../actions/index';

class BookList extends Component {

  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => { this.props.selectBook(book) }}
          className="list-group-item">
          {book.title}</li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4" >
        {this.renderList()}
      </ul>
    )
  }
}

//variables Passed!!
function mapStateToProps(state) {
  // whater is returned will show up as props in book list 
  // glue between react and redux
  return {
    books: state.books
  };
}

//Functions passed!
// anything returned from this function will end up as props 
// on the book list container
function mapDispatchToProps(dispatch) {
  //whenever select book is called the reult should be passed
  // to all  reducers
  // dispatch passes to all reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// promote book list from a component to a container 
// it needs to know about this new dispatch method, selectBook
// make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);