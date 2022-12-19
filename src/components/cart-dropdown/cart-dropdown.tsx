import Button from '../button/button';
import { CartProvider } from '../../stores/context/cart.context';

const CartDropdown: React.FC = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items"></div>
      <Button>CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
