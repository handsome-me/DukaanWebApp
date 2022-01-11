import React from 'react';
import PropTypes from 'prop-types';
import GlobalState, { State } from '../../Context/GlobalState';
  const Cart = props => {
    const {cart}= React.useContext(State);
    console.log("context val",cart);
    return (
        <div style={{border:"1px solid red",fontSize:'large'}}>
         Total Cart items are {cart.length}
        </div>
    );
};

Cart.propTypes = {
    
};

export default Cart;