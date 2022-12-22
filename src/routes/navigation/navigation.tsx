import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import CartIcon from '../../components/cart-icon/cart-icon';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown';

import { CartContext } from '../../stores/context/cart.context';
import { selectCurrentUser } from '../../stores/redux/user/user.selector';

import { ReactComponent as SupremeLootLogo } from '../../assets/supreme-loot-logo.svg';
import { signOutUser } from '../../utils/firebase/firebase.utils';

const Navigation: React.FC = () => {
  const currentUser = useSelector(selectCurrentUser);
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
