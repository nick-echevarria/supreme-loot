import { Outlet, Link } from 'react-router-dom';
import { Fragment, useContext } from 'react';
import { ReactComponent as SupremeLootLogo } from '../../assets/supreme-loot-logo.svg';
import { UserContext } from '../../stores/context/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';

const Navigation: React.FC = () => {
  const { currentUser } = useContext(UserContext);

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
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
