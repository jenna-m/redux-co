import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import Item from './shopping/Item';

const mapStateToProps = (state) => {
    return {
        items: state.items
    };
}

class Home extends React.Component {
    render() {
        let itemList = this.props.items.map(item => {
            if (item.id > 38) {
                return (
                    <div className="new-arrivals-item-card" key={item.id}>
                        <div className="new-arrivals-item-image">
                            <Link
                                to = {{
                                    pathname: `/products/${item.category}/${item.subcat}`,
                                    search: `?id=${item.id}`,
                                }}
                                component={ Item }>
                                    <img src={item.img} alt={item.title} />
                            </Link>
                        </div>
                    </div>
                )
            }
        })

        return (
            <div>
                <div className="home-hero">
                    <div className="home-hero-message">
                        <h1>now open in Seattle!</h1>
                        <Link className="hero-button" to="/new-arrivals">Shop the New Arrivals</Link>
                    </div>
                    <span>Photo by <a href="https://unsplash.com/@fng137">Felipe Galvan</a></span>
                </div>
                <div className="new-arrivals-container">
                    <h1>How about...</h1>
                    <div className="new-arrivals-items">
                        {itemList}
                    </div>
                </div>
            </div>
            
        );
    }
}

export default connect(mapStateToProps)(withRouter(Home));