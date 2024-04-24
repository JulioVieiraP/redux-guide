import { useSelector } from "react-redux";
// Styles
import * as Styles from "./styles";

import CartItem from '../cart-item/index'
import { selectProductsTotalPrice } from "../../redux/cart/cart.seletores";

const Cart = ({ isVisible, setIsVisible }) => {
  const handleEscapeAreaClick = () => setIsVisible(false);

  const { Products } = useSelector(state => state.cartReducer)

  const productsTotalPrice = useSelector(selectProductsTotalPrice)

  return (
    <Styles.CartContainer isVisible={isVisible}>
      <Styles.CartEscapeArea onClick={handleEscapeAreaClick} />
      <Styles.CartContent>
        <Styles.CartTitle>Seu Carrinho</Styles.CartTitle>
        {Products.map((product, index) => <CartItem product={product} key={index}/>)}
        <Styles.CartTotal>Total: R$ {productsTotalPrice}</Styles.CartTotal>
      </Styles.CartContent>
    </Styles.CartContainer>
  );
};

export default Cart;
