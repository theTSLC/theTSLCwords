import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectWord } from '../actions/index';
import { bindActionCreators } from 'redux';

class WordList extends Component {
	renderList() {
		return this.props.words.map((word) => {
			return (
			  <li key={word.spelling} className="list-group-item"> {word.spelling} </li>
			);
		});
	}


  render() {
  	return (
  		<ul className="list-group col-sm-4"> 
  		  {this.renderList()}
  		</ul>
  	)
  }
}

// critical function; glue betweeen React and Redux 
// whenever app State changes, container WordList will automatically re-render
function mapStateToProps(state) {
	// whatever object is returned will shop up as props on WordList (i.e., be available as this.props)
	return {
		words: state.words
	}
}

// whatever is returned from this function will end up as props on WordList container
function mapDispatchToProps(dispatch) {
	// whenever selectWord is called, the result should be passed to all of our Reducers - the whole purpose of bindActionCreators & dispatch
	return bindActionCreators({selectWord: selectWord}, dispatch)
}

// connect takes a function and a component and produces a container - needs to know about new dispatch method, selectWord; make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(WordList);