import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
    render() {
        return (
            <div>
                <div className="footer">
                    <div classname="social">
                        <ul>
                            <li className="heading">Connect w/ Us</li>
                            <li><a href="/"><i class="fa fa-facebook-f"></i> Facebook</a></li>
                            <li><a href="/"><i class="fa fa-instagram"></i> Instagram</a></li>
                            <li><a href="/"><i class="fa fa-twitter"></i> Twitter</a></li>
                            <li><a href="/"><i class="fa fa-pinterest-p"></i> Pinterest</a></li>
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
                            <li className="heading">Any Questions?</li>
                            <li><Link exact to="/contact">Contact Us</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="github">
                    <p>Built with <span className="love-ico"><i class="fa fa-heart"></i></span> by <a href="https://github.com/jenna-m">jenna-m</a>. Hosted on GitHub.</p>
                </div>
            </div>
        );
    }

}

export default Footer;