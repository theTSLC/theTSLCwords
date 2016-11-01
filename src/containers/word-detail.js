import React, { Component } from 'react';
import { connect } from 'react-redux';

class WordDetail extends Component {
	render() {
		if (!this.props.word) {
			return <div> Select a word to get started! </div>;
		}
		
		return (
			<div> 
				<h3> Details for: </h3>
				<div> {this.props.word.spelling} </div>
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