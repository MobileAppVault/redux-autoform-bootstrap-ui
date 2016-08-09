import React, { Component, PropTypes } from 'react';
import Header from '../common/Header';

export default class NormalForm extends Component {
	static propTypes = {
		content: PropTypes.array.isRequired,
		title: PropTypes.string
	};

	render() {
		let { title, content } = this.props;
		
		return (
			<section>
				<div className='row'>
					<div className="metaform-group">
						<Header title={title}/>
						<div className="metaform-group-content">
							{ content }
						</div>
					</div>
				</div>
			</section>
		);
	}
}
