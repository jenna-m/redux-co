import React from 'react';
import { connect } from 'react-redux';
import {
    Link,
    withRouter
} from 'react-router-dom';
import Item from './Item';

const mapStateToProps = (state) => {
    return {
        items: state.items
    };
}

class Clothing extends React.Component {
    render() {
        let itemList = this.props.items.map(item =>{
            if (item.category === 'clothing') {
                return (
                    <div className="category-item-card" key={item.id}>
                        <div className="category-item-image">
                            <Link
                                to = {{
                                    pathname: `/products/${item.category}`,
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
        })

        return (
            <div className="category-container">
                <h1>Clothing</h1>
                <div className="category-items">
                    {itemList}
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps)(withRouter(Clothing));