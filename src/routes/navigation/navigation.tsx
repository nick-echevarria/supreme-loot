import { Outlet, Link } from 'react-router-dom';
import { Fragment } from 'react';
import { ReactComponent as SupremeLootLogo } from '../../assets/supreme-loot-logo.svg';

const Navigation: React.FC = () => {
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
          <Link className="nav-link" to="/log-in">
            LOG IN
          </Link>
          <Link className="nav-link" to="/sign-up">
            SIGN UP
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
