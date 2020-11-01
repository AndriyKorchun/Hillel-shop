import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as CrownIcon } from '../../assets/crown.svg';
import './header.styles.scss';
import CartIcon from '../cart-icon/cart-icon.component';

const Header = () => (
  <header className="header">
    <Link to="/" className="logo-container">
      <CrownIcon />
    </Link>

    <div className="options">
      <nav>
        <a href="#" className="option">Shop</a>
        <a href="#" className="option">Sign in</a>
      </nav>

      <CartIcon />
    </div>
  </header>
);

export default Header;
