import React, { Component } from 'react';
import { connect } from 'react-redux';

class WordDetail extends Component {
	render() {
		if (!this.props.word) {
			return <div> Select a word to get started! </div>;
		}

		return (
			<div> 
				<h5> Details for: </h5>
				<h3> {this.props.word.spelling} </h3>
				<div> Definition: {this.props.word.definition} </div>
				<div> Example: {this.props.word.example} </div>
				<div> Etymology: {this.props.word.etymology} </div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		word: state.activeWord
	};
}

export default connect(mapStateToProps)(WordDetail)