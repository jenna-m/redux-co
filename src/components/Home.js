import React from 'react';
import { connect } from 'react-redux';
import {
    BrowserRouter,
    Route,
    Link
} from 'react-router-dom';
import Item from './shopping/Item';
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
                        <Link to = {{
                            pathname: '/:category',
                            search: '?id=:id',
                        }}><img src={item.img} alt={item.title} /></Link>
                    </div>
                    <div className="card-component">
                        <span className="item-title">{item.title}</span>
                        <Link to="/" className="add-item" onClick={ ()=>{this.handleClick(item.id)} }><i class="fa fa-plus-circle"></i></Link>
                        <p className="item-price"><b>${item.price}</b></p>
                        <p className="item-desc">{item.desc}</p>
                    </div>
                </div>
            )
        })

        return (
            <div className="new-arrivals-section">
                <h1>What's new?</h1>
                <Route path="/" component={Item}>
                <div className="new-arrivals-items">
                    {itemList}
                </div>
                </Route>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);