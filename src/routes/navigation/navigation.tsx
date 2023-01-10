import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import CartIcon from '../../components/cart-icon/cart-icon';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown';

import { selectIsCartOpen } from '../../store/redux/cart/cart.selector';
import { selectCurrentUser } from '../../store/redux/user/user.selector';
import { signOutStart } from '../../store/redux/user/user.actions';

import { ReactComponent as SupremeLootLogo } from '../../assets/supreme-loot-logo.svg';

const Navigation: React.FC = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  const signOutUser = () => dispatch(signOutStart());

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
