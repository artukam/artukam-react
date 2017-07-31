import React from 'react';
import './AboutContent.css';
import profilePic from './images/artukam-profile-pic.png';
import placeholderLogo from './images/placeholder-logo.png';

const AboutContent = props => {
	return (
		<div className="col-xs-12 outer-container">
			<div className="col-xs-12 inverse-box">
				<div className="col-xs-12 outer-container">
					<h2>About me</h2>
					<hr className="inverse-hr" />
				</div>
				<div className="col-xs-12 col-sm-2 img-container">
					<img className="img-responsive img-circle profile-pic" src={profilePic} />
				</div>
				<div className="col-xs-12 col-sm-10">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac orci at nisl cursus pulvinar eu nec magna. Fusce ac eros nulla. Proin pretium purus ac eros lobortis volutpat. Nullam vulputate, ipsum ut pellentesque porttitor, ex augue posuere sem, a commodo orci arcu quis dui. Nullam sit amet nisl lobortis, dictum velit viverra, condimentum massa. In eu cursus lorem. Donec eu ante a velit eleifend consectetur. Morbi pellentesque erat at nisl dictum, quis fringilla risus mollis. In mattis ipsum sit amet tincidunt dignissim. Quisque vel fermentum mauris, quis iaculis est. Maecenas fringilla nunc vitae ultricies commodo. Vivamus mollis quam at massa bibendum, eu ullamcorper neque dictum. Morbi feugiat nibh et urna hendrerit gravida. Ut hendrerit lectus cursus ultrices mollis. Interdum et malesuada fames ac ante ipsum primis in faucibus.
					</p>
				</div>
			</div>
			<div className="col-xs-12 normal-box">
				<div className="col-xs-12 outer-container">
					<h2>Experience</h2>
					<hr />
				</div>
				<div className="col-xs-12 outer-container">
					<h3>Projects</h3>
				</div>
				<div className="col-xs-12 outer-container experience-container">
					<div className="col-xs-12 col-sm-2">
						<div className="company-logo-container">
							<img className="img-responsive img-circle company-logo" src={placeholderLogo} />
						</div>
						<div>
							<p className="bold-text">[Company name]</p>
							<p>[Date]</p>
						</div>
					</div>
					<div className="col-xs-12 col-sm-10">
						<p className="bold-text">[Position/Role]</p>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac orci at nisl cursus pulvinar eu nec magna. Fusce ac eros nulla. Proin pretium purus ac eros lobortis volutpat. Nullam vulputate, ipsum ut pellentesque porttitor, ex augue posuere sem, a commodo orci arcu quis dui. Nullam sit amet nisl lobortis, dictum velit viverra, condimentum massa. In eu cursus lorem. Donec eu ante a velit eleifend consectetur.</p>
					</div>
				</div>
				<div className="col-xs-12 outer-container experience-container">
					<div className="col-xs-12 col-sm-2">
						<div className="company-logo-container">
							<img className="img-responsive img-circle company-logo" src={placeholderLogo} />
						</div>
						<div>
							<p className="bold-text">[Company name]</p>
							<p>[Date]</p>
						</div>
					</div>
					<div className="col-xs-12 col-sm-10">
						<p className="bold-text">[Position/Role]</p>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac orci at nisl cursus pulvinar eu nec magna. Fusce ac eros nulla. Proin pretium purus ac eros lobortis volutpat. Nullam vulputate, ipsum ut pellentesque porttitor, ex augue posuere sem, a commodo orci arcu quis dui. Nullam sit amet nisl lobortis, dictum velit viverra, condimentum massa. In eu cursus lorem. Donec eu ante a velit eleifend consectetur.</p>
					</div>
				</div>
				<div className="col-xs-12 outer-container">
					<h3>Personal projects</h3>
				</div>
				<div className="col-xs-12 outer-container experience-container">
					<div className="col-xs-12 col-sm-2">
						<div>
							<p className="bold-text">[Project name]</p>
							<p>[Date]</p>
						</div>
					</div>
					<div className="col-xs-12 col-sm-10">
						<p className="bold-text">[Position/Role]</p>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac orci at nisl cursus pulvinar eu nec magna. Fusce ac eros nulla. Proin pretium purus ac eros lobortis volutpat. Nullam vulputate, ipsum ut pellentesque porttitor, ex augue posuere sem, a commodo orci arcu quis dui. Nullam sit amet nisl lobortis, dictum velit viverra, condimentum massa. In eu cursus lorem. Donec eu ante a velit eleifend consectetur.</p>
					</div>
				</div>
				<div className="col-xs-12 outer-container experience-container">
					<div className="col-xs-12 col-sm-2">
						<div>
							<p className="bold-text">[Project name]</p>
							<p>[Date]</p>
						</div>
					</div>
					<div className="col-xs-12 col-sm-10">
						<p className="bold-text">[Position/Role]</p>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac orci at nisl cursus pulvinar eu nec magna. Fusce ac eros nulla. Proin pretium purus ac eros lobortis volutpat. Nullam vulputate, ipsum ut pellentesque porttitor, ex augue posuere sem, a commodo orci arcu quis dui. Nullam sit amet nisl lobortis, dictum velit viverra, condimentum massa. In eu cursus lorem. Donec eu ante a velit eleifend consectetur.</p>
					</div>
				</div>
			</div>
			<div className="col-xs-12 inverse-box">
				<div className="col-xs-12 outer-container">
					<h2>Skills</h2>
					<hr className="inverse-hr" />
				</div>
				<div className="col-xs-12 outer-container">
					<h4>Javascript</h4>
				</div>
				<div className="col-xs-12 outer-container">
					<h4>Python</h4>
				</div>
				<div className="col-xs-12 outer-container">
					<h4>Ruby</h4>
				</div>
				<div className="col-xs-12 outer-container">
					<h4>HTML/CSS</h4>
				</div>
				<div className="col-xs-12 outer-container">
					<h4>Other</h4>
				</div>
			</div>
		</div>
	)
}

export default AboutContent;