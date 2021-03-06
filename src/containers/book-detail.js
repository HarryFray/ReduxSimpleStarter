import React, { Component } from 'react';
import { connect } from 'react-redux'; // connects react views with redux state

class BookDetail extends Component {

  render() {
    if (!this.props.book) {
      return <div>select a book to get started!</div>
    } else {
      return (
        <div>
          {this.props.book.title}
        </div>
      )
    }
  }

}


function mapStateToProps(state) {
  return {
    book: state.activeBook
  }
}

export default connect(mapStateToProps)(BookDetail);