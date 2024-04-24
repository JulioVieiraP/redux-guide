import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// Components
import Cart from "../cart/index";

// Styles
import * as Styles from "./styles";

// Utilities

import { selectProductsCount } from "../../redux/cart/cart.seletores";
import { login, logout } from "../../redux/user/slice";


function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const { currentUser } = useSelector(rootReducer => rootReducer.userReducer)
  const productsCount = useSelector(selectProductsCount)
  
  const dispatch = useDispatch()

  

  console.log(currentUser)

  const handleLoginClick = () =>{
    dispatch(login({name: 'Julio', Email: 'Julio@gmail.com'}))
  }

  const handleLogoutClick = () => {
    dispatch(logout())
  }

  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
        {currentUser ? (
          <div onClick={handleLogoutClick}>Sair</div>
        ) : (
          <div onClick={handleLoginClick}>Login</div>
        )}

        <div onClick={handleCartClick}>Carrinho ({productsCount})</div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;
