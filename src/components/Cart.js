import React from "react";
import styled from "styled-components";

import CartItems from "./CartItems";
import CartTotal from "./CartTotal";
const Cart = () => {
  return (
    <Container>
      <CartItems />
      <CartTotal />
    </Container>
  );
};

export default Cart;

const Container = styled.div`
  display: flex;
  background-color: #eaeded;
`;
