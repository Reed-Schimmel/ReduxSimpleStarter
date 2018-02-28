import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    if (!this.props.book) {
      return  <div>Select a book to get started.</div>;
    }

    const { title, pages } = this.props.book;

    return (
      <div>
        <h3>Details for:</h3>
        <div>Title: {title}</div>
        <div>Length: {pages} pages</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    book: state.selectedBook
  }
}

export default connect(mapStateToProps)(BookDetail);
