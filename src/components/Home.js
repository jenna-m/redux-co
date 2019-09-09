import React from 'react';
import { connect } from 'react-redux';
import {
    Link,
    withRouter
} from 'react-router-dom';
import { addToCart } from '../actions/CartActions';
import Item from './shopping/Item';

const mapStateToProps = (state) => {
    return {
        items: state.items
    };
}

class Home extends React.Component {
    render() {
        let itemList = this.props.items.map(item =>{
            return (
                <div className="home-item-card" key={item.id}>
                    <div className="home-item-image">
                        <Link to = 
                            {{ pathname: `/products/${item.category}`,
                            search: `?id=${item.id}`,
                            state: {
                                id: `${item.id}`,
                                img: `${item.img}`,
                                title: `${item.title}`, 
                                desc: `${item.desc}`,
                                price: `${item.price}`
                            } }}
                            component={ Item }>
                                <img src={item.img} alt={item.title} />
                        </Link>
                    </div>
                    <div className="home-item-info">
                        <p className="home-item-title">{item.title}</p>
                        <p className="home-item-price">${item.price}</p>
                    </div>
                </div>
            )
        })

        return (
            <div className="home-new-arrivals">
                <h1>What's new?</h1>
                <div className="new-arrivals-items">
                    {itemList}
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps)(withRouter(Home));