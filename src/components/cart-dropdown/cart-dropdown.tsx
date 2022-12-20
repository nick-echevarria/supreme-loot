import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../stores/context/cart.context';

import Button from '../button/button';
import CartItem from '../cart-item/cart-item';

const CartDropdown: React.FC = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={goToCheckoutHandler}>CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;