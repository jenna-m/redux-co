import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { 
    addToCart, 
    changeSize
} from '../../actions/CartActions';

class Item extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            item: this.props.location.state
        }
    }

    render() {
        let item = this.state.item;
        return (
            <div className="item-details">
                <div className="item-details-img">
                    <img src={item.img} alt={item.title} />
                </div>
                <div className="item-details-info">
                    <p className="item-details-title">{item.title}</p>
                    <p className="item-details-price"><b>${item.price}</b></p>
                    <p className="item-details-desc">{item.desc}</p>
                    <div className="item-details-add-to-cart">
                        <button>Add to Bag</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Item);