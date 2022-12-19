import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import CartIcon from '../../components/cart-icon/cart-icon';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown';

import { UserContext } from '../../stores/context/user.context';
import { CartContext } from '../../stores/context/cart.context';

import { ReactComponent as SupremeLootLogo } from '../../assets/supreme-loot-logo.svg';
import { signOutUser } from '../../utils/firebase/firebase.utils';

const Navigation: React.FC = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <div className="nav-container">
        <div className="nav-left">
          <Link className="logo-container" to="/">
            <SupremeLootLogo className="logo" />
          </Link>
        </div>
        <div className="nav-right">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>

          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen ? <CartDropdown /> : null}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
