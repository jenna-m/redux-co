import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import RandomItem from './randomItem';

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
                    <span>Photo by <a href="https://unsplash.com/@fng137" target="new">Felipe Galvan</a></span>
                </div>
                <RandomItem />
            </div>
            
        );
    }
}

export default connect(mapStateToProps)(withRouter(Home));