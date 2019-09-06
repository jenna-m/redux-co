import React from 'react';

class ReturnsExchanges extends React.Component {
    render() {
        return(
            <div>
                <h1>Returns & Exchanges</h1>
                <div class="returns-exchanges">
                <p>Not totally satisfied with your order? We're sorry!</p>
                <p>Enter your order number below, and we'll sort it out.</p>
                    <form>
                        <input type="text" />
                        <button href="/">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default ReturnsExchanges;