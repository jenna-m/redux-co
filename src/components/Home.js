import React from 'react';
import { connect } from 'react-redux';
import {
    Link,
    withRouter
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
                <div className="home-item-card" key={item.id}>
                    <div className="home-item-image">
                        <Link to = 
                            {{ pathname: `/products/${item.category}`,
                            search: `?id=${item.id}`,
                            state: {
                                id: `${item.id}`,
                                img: `${item.img}`,
                                title: `${item.title}`, 
                                desc: `${item.desc}`,
                                price: `${item.price}`
                            } }}
                            component={ Item }>
                                <img src={item.img} alt={item.title} />
                        </Link>
                    </div>
                    <div className="home-item-info">
                        <span className="home-item-title">{item.title}</span>
                        <Link to="/" className="home-add-item" onClick={ ()=>{this.handleClick(item.id)} }><i class="fa fa-plus-circle"></i></Link>
                        <p className="home-item-price"><b>${item.price}</b></p>
                        <p className="home-item-desc">{item.desc}</p>
                    </div>
                </div>
            )
        })

        return (
            <div className="home-new-arrivals">
                <h1>What's new?</h1>
                <div className="new-arrivals-items">
                    {itemList}
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));