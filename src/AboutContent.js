import React from 'react';
import './AboutContent.css';
import profilePic from './images/artukam-profile-pic.png';
import courseReportLogo from './images/course_report_logo.png';
import tradecraftLogo from './images/tradecraft_logo.png';
import corrsLogo from './images/corrs_logo.png';

const AboutContent = props => {
	return (
		<div className="col-xs-12 outer-container">
			<div className="col-xs-12 inverse-box">
				<div className="col-xs-12 outer-container">
					<h2>About me</h2>
					<hr className="inverse-hr" />
				</div>
				<div className="col-xs-12 col-sm-2 img-container">
					<img className="img-responsive img-circle profile-pic" src={profilePic} alt="Arthur Kam"/>
				</div>
				<div className="col-xs-12 col-sm-10">
					<p>
						Arthur is a software engineer with a focus on full stack web development.  He is also a corporate lawyer specialising in mergers and acquisitions and capital raisings.
					</p>
					<p>
						When he is not talking about himself in the third person, he is most likely either building applications with the purpose of bettering the world in some way or spending his time on learning something new (or at least attempting to).
					</p>
				</div>
			</div>
			<div className="col-xs-12 normal-box">
				<div className="col-xs-12 outer-container">
					<h2>Experience</h2>
					<hr className="inverse-hr" />
				</div>
				<div className="col-xs-12 outer-container">
					<h3>Work</h3>
				</div>
				<div className="col-xs-12 outer-container experience-container">
					<div className="col-xs-12 col-sm-2">
						<div className="company-logo-container">
							<img className="img-responsive img-circle company-logo" src={courseReportLogo} alt="Course Report"/>
						</div>
						<div>
							<p className="bold-text">Course Report</p>
							<p>2017</p>
						</div>
					</div>
					<div className="col-xs-12 col-sm-10">
						<p className="bold-text">Software Developer</p>
						<p>
							Full stack software engineer assisting with the maintenance and optimising of the Course Report website.
						</p>
						<p>
							Notable achievements include:
						</p>
						<ul>
							<li>generating SEO traffic for platform that receives 100,000+ monthly views through developing index pages for cities, technologies, and career tracks using JavaScript and Ruby on Rails;</li>
							<li>integrated Geocoder (location) gem into Ruby on Rails RESTful backend to target users on cities index page and query top 8 closest cities with educational sites;</li>
							<li>reducing test suite runtime by > 70% through implementing automated background testing and mock geocoder to provide response for API requests utilizing Ruby and RSpec Guard; and</li>
							<li>enhanced code coverage for Ruby on Rails models and controllers by 20% more unit tests in RSpec.</li>
						</ul>
					</div>
				</div>
				<div className="col-xs-12 outer-container experience-container">
					<div className="col-xs-12 col-sm-2">
						<div className="company-logo-container">
							<img className="img-responsive img-circle company-logo" src={tradecraftLogo} alt="Tradecraft"/>
						</div>
						<div>
							<p className="bold-text">Tradecraft</p>
							<p>2017</p>
						</div>
					</div>
					<div className="col-xs-12 col-sm-10">
						<p className="bold-text">Software Developer</p>
						<p>
							Full stack software engineer tasked with building new application designed to help job seekers to track opportunities and collate research on companies.
						</p>
						<p>
							Notable achievements include:
						</p>
						<ul>
							<li>architecting core functionality for job search and data sharing platform using Javascript, ReactJS and Redux, enabling design students to save 10+ hours weekly in their job search;</li>
							<li>refining user experience (UX) through creating over 20 ReactJS components, including drag and drop functionality for job stages, site navigation, and photo upload with UploadCare API integration; and</li>
							<li>utilizing Redux and redux-persist to maintain user data through page refreshes until user logout is triggered, refactoring over 80% of existing local state to Redux store.</li>
						</ul>
					</div>
				</div>
				<div className="col-xs-12 outer-container experience-container">
					<div className="col-xs-12 col-sm-2">
						<div className="company-logo-container">
							<img className="img-responsive company-logo" src={corrsLogo} alt="Corrs Chambers Westgarth"/>
						</div>
						<div>
							<p className="bold-text">Corrs Chambers Westgarth</p>
							<p>2013-2016</p>
						</div>
					</div>
					<div className="col-xs-12 col-sm-10">
						<p className="bold-text">Lawyer</p>
						<p>Corporate lawyer specialising in public and private mergers and acquisitions as well as equity capital raisings</p>
						<p>
							Notable transactions include advising:
						</p>
						<ul>
							<li>the consortium between Macquarie Group and China Resources on their AUD 1.7 billion acquisition of the majority of share in the radiation oncology and cardiac services company GenesisCare;</li>
							<li>Restaurant Brands New Zealand on their AUD $82 million acquisition of QSR Pty Ltd, the largest franchisee in New South Wales, Australia; and</li>
							<li>Affinity Education Group on their successful defence against the hostile takeover by G8 Education Limited and the implementation of their AUD 212 million scheme of arrangement with Anchorage Capital Partners.</li>
						</ul>
					</div>
				</div>
				<div className="col-xs-12 outer-container">
					<h3>Personal projects</h3>
				</div>
				<div className="col-xs-12 outer-container experience-container">
					<div className="col-xs-12 col-sm-2">
						<div>
							<p className="bold-text">English Premier League Statistics</p>
							<p>2017</p>
						</div>
					</div>
					<div className="col-xs-12 col-sm-10">
						<p className="bold-text">Software Engineer</p>
						<p>EPL statistics platform to chart out player offensive output for the top 6 teams from years of 2010 to 2017.</p>
						<ul>
							<li>Scraped and compiled over 1,000 lines of data from ESPN.com for football (soccer) players of the top 6 teams of the English Premier League for the last 6 seasons using Python and BeautifulSoup.</li>
							<li>Crafted in-depth charts mapping out key offense statistics for each player that can be filtered by team, position, metric and year utilizing JavaScript and D3.js.</li>
						</ul>
					</div>
				</div>
				<div className="col-xs-12 outer-container experience-container">
					<div className="col-xs-12 col-sm-2">
						<div>
							<p className="bold-text">Momentai</p>
							<p>2017</p>
						</div>
					</div>
					<div className="col-xs-12 col-sm-10">
						<p className="bold-text">Software Engineer</p>
						<p>Clean and minimalistic task tracking platform to enable users to easily maintain their schedule of projects.</p>
						<ul>
							<li>Designed key frontend functionality for system, allowing users to create project lists and add tasks to each list using JavaScript, HTML5 and CSS3.</li>
							<li>Constructed schemaless backend server to handle RESTful API requests for 3 resources with Node.js.</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="col-xs-12 inverse-box">
				<div className="col-xs-12 outer-container">
					<h2>Technical skills</h2>
					<hr className="inverse-hr" />
				</div>
				<div className="col-xs-12 outer-container">
					<h4>Proficient</h4>
					<p>
						JavaScript, ReactJS, Redux, React Native, D3.js, Node.js, Express, Python, Flask, SQL, PostgreSQL, Mocha, Chai, Mongoose, MongoDB, Git, Heroku, jQuery, HTML5, CSS3, Agile.
					</p>
				</div>
				<div className="col-xs-12 outer-container">
					<h4>Exposure</h4>
					<p>
						Jasmine, Socket.IO, Ruby, Rails, RSpec, Sass, Materialize.
					</p>
				</div>
			</div>
		</div>
	)
}

export default AboutContent;