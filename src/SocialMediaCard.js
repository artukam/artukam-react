import React from 'react';
import './SocialMediaCard.css';

const SocialMediaCard = props => {
	return (
		<div className="col-xs-12 social-media-container">
			<div className="col-xs-3 col-sm-6 col-md-3 social-media-box">
				<a href="https://github.com/artukam" target="_blank">
					<i className="fa fa-github-square social-media-logo fa-2x" aria-hidden="true"></i>
				</a>
			</div>
			<div className="col-xs-3 col-sm-6 col-md-3 social-media-box">
				<a href="https://www.linkedin.com/in/arthur-kam-43450739/" target="_blank">
					<i className="fa fa-linkedin-square social-media-logo fa-2x" aria-hidden="true"></i>
				</a>
			</div>
			<div className="col-xs-3 col-sm-6 col-md-3 social-media-box">
				<a href="https://angel.co/arthur-kam" target="_blank">
					<i className="fa fa-angellist social-media-logo fa-2x" aria-hidden="true"></i>
				</a>
			</div>
			<div className="col-xs-3 col-sm-6 col-md-3 social-media-box">
				<a href="https://twitter.com/theoryium_au" target="_blank">
					<i className="fa fa-twitter-square social-media-logo fa-2x" aria-hidden="true"></i>
				</a>
			</div>
		</div>
	)
}

export default SocialMediaCard;