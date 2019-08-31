import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions/action-types/CartActions';

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
                        <p><b>${item.price}</b></p>
                        <span to="/" className="add-item" onClick={ ()=>{this.handleClick(item.id)} }><i class="fa fa-plus-circle"></i></span>
                    </div>
                </div>
            )
        })

        return (
            <dlv className="new-arrivals">
                <h3>New Arrivals</h3>
                <div className="new-arrivals-items">
                    {itemList}
                </div>
            </dlv>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);