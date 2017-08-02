import React from 'react';
import './ContactContent.css';

const ContactContent = props => {
	return (
		<div className="col-xs-12 outer-container">
			<div className="col-xs-12 normal-box">
				<div className="col-xs-12 outer-container">
					<h2>Get in touch</h2>
					<hr />
					<p>
						If you have any questions or want to get in touch, please feel free to reach out by:
					</p>
				</div>
				<div className="col-xs-12 contact-box">
					<table>
						<tr>
							<a href="mailto:ksk.arthur@gmail.com">
								<td>
									<i className="fa fa-envelope fa-2x" aria-hidden="true"></i>
								</td>
								<td>
									<span className="contact-text">Email</span>
								</td>
							</a>
						</tr>
						<tr>
							<a href="https://www.linkedin.com/in/arthur-kam-43450739/" target="_blank" rel="noopener noreferrer">
								<td>
									<i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>
								</td>
								<td>
									<span className="contact-text">InMail</span>
								</td>
							</a>
						</tr>
						<tr>
							<a href="https://angel.co/arthur-kam" target="_blank" rel="noopener noreferrer">
								<td>
									<i className="fa fa-angellist fa-2x" aria-hidden="true"></i>
								</td>
								<td>
									<span className="contact-text">Message</span>
								</td>
							</a>
						</tr>
						<tr>
							<a href="https://twitter.com/theoryium_au" target="_blank" rel="noopener noreferrer">
								<td>
									<i className="fa fa-twitter-square fa-2x" aria-hidden="true"></i>
								</td>
								<td>
									<span className="contact-text">Tweet</span>
								</td>
							</a>
						</tr>
					</table>
				</div>
			</div>
		</div>
	)
}

export default ContactContent;