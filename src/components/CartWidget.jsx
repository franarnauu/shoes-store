import React, { useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const { cartCount } = useContext(CartContext);
    const count = cartCount().toString();

    return (
        <Link to="/cart">
            <FaShoppingCart size={20} /> {count}
        </Link>
    );
};

export default CartWidget;


