import React, {Component} from 'react';

export default class WordList extends Component {
	renderList() {
		return this.props.words.map((word) => {
			return {
				<li key={word.title} className="list-group-item">{word.title}
			}
		}
	}
	render() {
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
			)
	}
}