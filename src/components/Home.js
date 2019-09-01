import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../actions/CartActions';

const mapStateToProps = (state) => {
    return {
        items: state.items
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => { dispatch(addToCart(id)) }
    }
}

class Home extends React.Component {

    handleClick = (id) => {
        this.props.addToCart(id);
    }

    render() {
        let itemList = this.props.items.map(item =>{
            return (
                <div className="item-card" key={item.id}>
                    <div className="item-image">
                        <img src={item.img} alt={item.title} />
                        <span className="item-title">{item.title}</span>
                    </div>
                    
                    <div className="card-component">
                        <p>{item.desc}</p>
                        <p><b>${item.price}</b> <Link to="/cart" className="add-item" onClick={ ()=>{this.handleClick(item.id)} }><i class="fa fa-plus-circle"></i></Link></p>
                    </div>
                </div>
            )
        })

        return (
            <div className="new-arrivals">
                <h1>New Arrivals</h1>
                <div className="new-arrivals-items">
                    {itemList}
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);