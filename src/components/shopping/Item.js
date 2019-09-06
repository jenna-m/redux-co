import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { 
    addToCart, 
    changeSize
} from '../../actions/CartActions';
import { ShopContent } from '../../constants/ShopContent';

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => { dispatch(addToCart(id)) },
        changeSize: (id) => { dispatch(changeSize(id)) }
    }
}
class Item extends React.Component {
    constructor() {
        super();

        this.state = {
            itemID: ShopContent
        }
    }
    handleClick = (id) => {
        this.props.addToCart(id)
    }

    handleSizeChange = (id) => {
        this.props.changeSize(id)
    }

    render() {
        const itemDetails = this.props.items.filter(
            item => item.id === this.props.params.id)[0];
        return (
            <div className="item">
                <div className="item-view" key={itemDetails.id}>
                    <div className="item-image">
                        <img src={itemDetails.img} alt={itemDetails.title} />
                    </div>
                    <div className="card-component">
                        <span className="item-title">{itemDetails.title}</span>
                        <Link to="/" className="add-item" onClick={ ()=>{this.handleClick(itemDetails.id)} }><i class="fa fa-plus-circle"></i></Link>
                        <p className="item-price"><b>${itemDetails.price}</b></p>
                        <p className="item-desc">{itemDetails.desc}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapDispatchToProps)(Item);