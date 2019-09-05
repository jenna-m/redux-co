import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { 
    addToCart, 
    changeSize
} from '../../actions/CartActions';

const mapStateToProps = (state) => {
    return {
        items: state.items,
        id: state.items.id
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => { dispatch(addToCart(id)) },
        changeSize: (id) => { dispatch(changeSize(id)) }
    }
}
class Item extends React.Component {
    handleClick = (id) => {
        this.props.addToCart(id)
    }

    render() {
        let itemList = this.props.items.map(item =>{
            return (
                <div className="item-card" key={item.id}>
                    <div className="item-image">
                        <Link to = {{
                            pathname: `/${item.category}`,
                            search: `?id=${item.id}`,
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
            <div className="item">
                {itemList}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Item);