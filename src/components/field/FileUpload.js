import React, { Component, PropTypes } from 'react';
import DropZone from '../common/DropZone';
import GlyphButton from '../common/GlyphButton';
import FileInfo from '../common/FileInfo';
import { Col, Row, Glyphicon } from 'react-bootstrap';

import fetch from 'isomorphic-fetch';

export default class FileUpload extends Component {
	static propTypes = {
		url: PropTypes.string.isRequired
	};

	state = {
		files: []
	};

	onDrop = (files) => {
		//TODO Check file and size. Avoid duplicated files
		let fileArray = [...files, ...this.state.files];

		this.setState({ files: fileArray });
	};

	onClick = () => {
		// TODO Handle response status for upload service
		const { files } = this.state;
		const { url } = this.props;

		let fileData = new FormData();

		files.forEach((file) => {
			fileData.append("fileData", file);
		});

		fetch(url, {
			method: "POST",
			body: fileData
		});
	};

	render() {
		let { files } = this.state;

		//TODO Think how to manage styles correctly
		const styles = {
			titleDiv: {
				marginTop: "6px",
				color: "#616161"
			},
			div: {
				marginTop: "6px"
			},
			p: {
				textAlign: "center",
				color: "#616161"
			}
		};

		return (
			<div>
				<Row>
					<Col xs={2} md={2}>
						<div style={styles.titleDiv}>
							<b>Attachment</b>
						</div>
					</Col>
					<Col xs={10} md={10}>
						<DropZone onDrop={this.onDrop}>
							<div style={styles.div}>
								<p style={styles.p}>
									<Glyphicon glyph="cloud-upload"/> Drop files to attach, or <a>browse</a>
								</p>
							</div>
							<div>
								<ul>{
									files.map((file, index) => (
										<FileInfo key={index} file={file}/>
									))
								}
								</ul>
							</div>
						</DropZone>
					</Col>
				</Row>
				<Col>
					<GlyphButton type="submit" glyph="cloud-upload" text="Upload" bsSize="primary" onClick={this.onClick}/>
				</Col>
			</div>
		);
	}

}