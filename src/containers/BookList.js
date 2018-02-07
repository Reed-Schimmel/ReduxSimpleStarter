import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import * as actions from '../actions';
import { selectBook } from '../actions';

class BookList extends Component {
  renderList() {
    return this.props.books.map(book => {
      return (
      <li
        key={book.title}
        className="list-group-item"
        onClick={() => this.props.selectBook(book)}
      >
        {book.title}
      </li>
    );
    });
  }
  
  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

const mapStateToProps = ({ books }) => {
  return { books };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ selectBook }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
// export default connect(mapStateToProps, actions)(BookList);
