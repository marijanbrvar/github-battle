import React, { Component } from 'react';
import '../index.css';
import Popular from './Popular';

function isLoading() {
	return false
}

export default class App extends Component {
	render() {
		if(isLoading()) return null

		const name = 'Marijan'

		return (
			<div className="container">
				<Popular />
			</div>
			)
	}
};