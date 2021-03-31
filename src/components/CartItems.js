import React from "react";
import styled from "styled-components";
import CartItem from "./CartItem";

const CartItems = () => {
  return (
    <Container>
      <Headings>Shopping Cart</Headings>
      <Hr />
      <ItemsContainer>
        <CartItem />
      </ItemsContainer>
    </Container>
  );
};

export default CartItems;
const Container = styled.div`
  margin: 50px 12px 30px 30px;
  height: 343px;
  flex: 0.8;
  background-color: #ffffff;
`;
const Headings = styled.h1`
  padding: 20px;
  font-weight: 500;
`;
const Hr = styled.hr`
  width: 95%;
  height: 0.5px;
  color: ;
`;
const ItemsContainer = styled.div``;
