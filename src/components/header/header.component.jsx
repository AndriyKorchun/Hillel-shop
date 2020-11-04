import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as CrownIcon } from '../../assets/crown.svg';
import './header.styles.scss';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import CartIcon from '../cart-icon/cart-icon.component';

const Header = () => {
  const [isVisible, setVisible] = useState(false);

  return (
    <header className="header">
      <Link to="/" className="logo-container">
        <CrownIcon />
      </Link>

      <div className="options">
        <nav>
          <Link to="/shop" className="option">Shop</Link>
          <Link to="/auth" className="option">Sign in</Link>
        </nav>

        <CartIcon onToggle={() => setVisible(!isVisible)}/>

        { isVisible && <CartDropdown /> }
      </div>
    </header>
  );
};

export default Header;
