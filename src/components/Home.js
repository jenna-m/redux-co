import React from 'react';
import { connect } from 'react-redux';
import {
    Link,
    withRouter
} from 'react-router-dom';
import Item from './shopping/Item';

const mapStateToProps = (state) => {
    return {
        items: state.items
    };
}

class Home extends React.Component {
    render() {
        let itemList = this.props.items.map(item => {
            if (item.id > 6) {
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
            </div>
        );
    }
}

export default connect(mapStateToProps)(withRouter(Home));