import React, { Component } from 'react';
import { connect } from 'react-redux';

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
	//whatever object is returned will shop up as props on WordList (be available as this.props)
	return {
		words: state.words
	}
}

// connect takes a function and a component and produces a container
export default connect(mapStateToProps)(WordList);