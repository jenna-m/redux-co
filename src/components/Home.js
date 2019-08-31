import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        items: state.items
    };
}

class Home extends React.Component {
    render() {
        let itemList = this.props.items.map(item =>{
            return (
                <div className="item-card" key={item.id}>
                    <div className="item-image">
                        <img src={item.img} alt={item.title} />
                        <span className="item-title">{item.title}</span>
                        <span className="add-item">+</span>
                    </div>
                    
                    <div className="card-component">
                        <p>{item.desc}</p>
                        <p><b>${item.price}</b></p>
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

export default connect(mapStateToProps)(Home);