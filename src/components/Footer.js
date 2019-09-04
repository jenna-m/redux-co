import React from 'react';

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
                        <div className="location-heading">
                            <span><i class="fa fa-compass"></i></span>
                        </div>
                        <div className="address">
                            <p>Pacific Place</p>
                            <p>600 Pine Street</p>
                            <p>Seattle, WA 98101</p>
                        </div>
                    </div>
                    <div className="shop-links">
                        <ul>
                            <li className="heading">Any Questions?</li>
                            <li><a href="/">Order Status</a></li>
                            <li><a href="/">Gift Cards</a></li>
                            <li><a href="/">Returns & Exchanges</a></li>
                            <li><a href="/">Contact Us</a></li>
                        </ul>
                        
                        
                    </div>
                </div>

                <div className="github">
                    <p>Built with <span className="love-ico"><i class="fa fa-heart"></i></span> by <a href="https://github.com/thesemdrnsocks">thesemdrnsocks</a>. Hosted on GitHub.</p>
                </div>
            </div>
        );
    }

}

export default Footer;