import React from 'react';
import './ContactContent.css';

const ContactContent = props => {
	return (
		<div className="col-xs-12 outer-container">
			<div className="col-xs-12 normal-box">
				<div className="col-xs-12 outer-container">
					<h2>Get in touch</h2>
					<hr className="inverse-hr" />
					<p>
						If you have any questions or want to get in touch, please feel free to reach out by:
					</p>
				</div>
				<div className="col-xs-12 contact-box">
					<table>
						<tbody>
							<tr>
								<td>
									<i className="fa fa-envelope fa-2x" aria-hidden="true"></i>
								</td>
								<td>
									<a href="mailto:ksk.arthur@gmail.com">
										<span className="contact-text">Email</span>
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>
								</td>
								<td>
									<a href="https://www.linkedin.com/in/arthur-kam-43450739/" target="_blank" rel="noopener noreferrer">
										<span className="contact-text">InMail</span>
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<i className="fa fa-angellist fa-2x" aria-hidden="true"></i>
								</td>
								<td>
									<a href="https://angel.co/arthur-kam" target="_blank" rel="noopener noreferrer">
										<span className="contact-text">Message</span>
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<i className="fa fa-twitter-square fa-2x" aria-hidden="true"></i>
								</td>
								<td>
									<a href="https://twitter.com/theoryium_au" target="_blank" rel="noopener noreferrer">
										<span className="contact-text">Tweet</span>
									</a>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	)
}

export default ContactContent;