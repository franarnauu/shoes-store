import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CartWidget = ({ itemCount }) => {
    return (
        <Link to="/cart">
            <FaShoppingCart size={20} /> {itemCount}
        </Link>
    );
};

export default CartWidget;


