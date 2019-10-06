import React from 'react';
import { connect } from 'react-redux';
import {
    Link,
    withRouter
} from 'react-router-dom';
import Item from '../item';

const mapStateToProps = (state) => {
    return {
        items: state.items
    };
}

class Shoes extends React.Component {
    render() {
        let itemList = this.props.items.map(item => {
            if (item.category === 'shoes') {
                return (
                    <div className="category-item-card" key={item.id}>
                        <div className="category-item-image">
                            <Link
                                to = {{
                                    pathname: `/products/${item.category}/${item.subcat}`,
                                    search: `?id=${item.id}`,
                                }}
                                component={ Item }>
                                    <img src={item.img} alt={item.title} />
                            </Link>
                        </div>
                        <div className="category-item-info">
                            <p className="category-item-title">{item.title}</p>
                            <p className="category-item-price">${item.price}</p>
                        </div>
                    </div>
                )
            } 
            return <React.Fragment />;
        })

        return (
            <div className="category-container">
                <h1>All Shoes</h1>
                <div className="category-items">
                    {itemList}
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps)(withRouter(Shoes));