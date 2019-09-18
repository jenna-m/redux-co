import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import RandomItems from './randomItems';

const mapStateToProps = (state) => {
    return {
        items: state.items
    };
}

class Home extends React.Component {
    render() {
        return (
            <div>
                <div className="home-hero">
                    <div className="home-hero-message">
                        <h1>now open in Seattle!</h1>
                        <Link className="hero-button" to="/new-arrivals">Shop the New Arrivals</Link>
                    </div>
                    <span>Photo by <a href="https://unsplash.com/@fng137">Felipe Galvan</a></span>
                </div>
                <RandomItems />
            </div>
            
        );
    }
}

export default connect(mapStateToProps)(withRouter(Home));