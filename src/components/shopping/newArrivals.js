import React from 'react';
import { connect } from 'react-redux';
import {
    Link,
    withRouter
} from 'react-router-dom';
import { numberOfItems } from '../../constants/ShopContent'; // Total # of items in shop
import Item from './item';

const mapStateToProps = (state) => {
    return {
        items: state.items
    };
}

class NewArrivals extends React.Component {
    render() {
        // const for 12 most recent items
        const mostRecent = numberOfItems - 12
        let itemList = this.props.items.map(item => {
            if (item.id > mostRecent) {
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
            <div className="new-arrivals-container">
                <h1>What's new?</h1>
                <div className="new-arrivals-items">
                    {itemList}
                </div>
                <Link className="button" to="/all-items">See Everything Else</Link>
            </div>
        );
    }
}

export default connect(mapStateToProps)(withRouter(NewArrivals));