import React from 'react';
import { connect } from 'react-redux';
import {
    Link,
    withRouter
} from 'react-router-dom';
import { addToCart } from '../../actions/actions';

const mapStateToProps = (state) => {
    return {
        items: state.items
    };
}

class Item extends React.Component {
    constructor(props) {
        super(props);

        // Extract currently-viewed item ID from current URL
        let currentItemID = new URLSearchParams(window.location.search).get('id');
        if (currentItemID) {
            currentItemID = parseInt(currentItemID, 10);
        }
        
        // Set state based on currentItemID
        this.state = {
            item: props.items.find(item => item.id === currentItemID)
        };
    }
    
    handleAddToCart = (id) => {
        this.props.dispatch(addToCart(id));
    }

    render() {
        let item = this.state.item;
        return (
            <div className="item-details" key={item.id}>
                <div className="item-details-img">
                    <img src={item.img} alt={item.title} />
                </div>
                <div className="item-details-info">
                    <p className="item-details-title">{item.title}</p>
                    <p className="item-details-price"><b>${item.price}</b></p>
                    <p className="item-details-desc">{item.desc}</p>
                    <div className="item-details-add-to-cart">
                        <Link 
                            to="/cart"
                            onClick={ () => { 
                                this.handleAddToCart(item.id);
                            }}
                        >
                            <button>Add to Bag</button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps)(withRouter(Item));