import React from 'react';
import { Link } from 'react-router-dom';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import {
	faFacebookF,
	faInstagram,
	faTwitter,
	faPinterestP
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Font Awesome icons
const facebookIcon = <FontAwesomeIcon icon={faFacebookF} />;
const instagramIcon = <FontAwesomeIcon icon={faInstagram} />;
const twitterIcon = <FontAwesomeIcon icon={faTwitter} />;
const pinterestIcon = <FontAwesomeIcon icon={faPinterestP} />;
const heartIcon = <FontAwesomeIcon icon={faHeart} />;

class Footer extends React.Component {
	render() {
		return (
			<div>
				<div className="footer">
					<div className="social">
						<ul>
							<li className="heading">Connect</li>
							<li>
								<a href="/">{facebookIcon} Facebook</a>
							</li>
							<li>
								<a href="/">{instagramIcon} Instagram</a>
							</li>
							<li>
								<a href="/">{twitterIcon} Twitter</a>
							</li>
							<li>
								<a href="/">{pinterestIcon} Pinterest</a>
							</li>
						</ul>
					</div>
					<div className="location">
						<ul>
							<li className="heading">Visit</li>
							<li>
								<div className="address">
									<p>Pacific Place</p>
									<p>600 Pine Street</p>
									<p>Seattle, WA 98101</p>
									<p>United States</p>
								</div>
							</li>
						</ul>
					</div>
					<div className="shop-links">
						<ul>
							<li className="heading"> Questions?</li>
							<li>
								<Link exact to="/about">
									About
								</Link>
							</li>
							<li>
								<Link exact to="/contact">
									Contact Us
								</Link>
							</li>
						</ul>
					</div>
				</div>

				<div className="github">
					<p>
						Built with <span className="love-ico">{heartIcon}</span>{' '}
						by{' '}
						<a
							href="https://jennamichaels.dev"
							target="_blank"
							rel="noopener noreferrer"
						>
							Jenna Michaels
						</a>
						.
					</p>
				</div>
			</div>
		);
	}
}

export default Footer;
