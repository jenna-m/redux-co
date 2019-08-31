import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        items: state.items
    };
}

class Home extends React.Component {
    render() {
        return (
            <dlv className="contaier">
                <h3>Home</h3>
            </dlv>
        )
    }
}

export default connect(mapStateToProps)(Home);