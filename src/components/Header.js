/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
// import RoomIcon from "@material-ui/icons/Room";
import black from "@material-ui/core/colors/black";

const Header = () => {
  return (
    <Container>
      <HeaderLogo>
        <img src={"https://i.imgur.com/7I9Was5.png"}></img>
      </HeaderLogo>
      <HeaderOptionAddress>
        <OptionLineOne>Hello</OptionLineOne>
        <OptionLineTwo>
          {/* <RoomIcon /> */}
          Select your address
        </OptionLineTwo>
      </HeaderOptionAddress>

      <HeaderSearch>
        <HeaderSearchInput text='text' />

        <HeaderSearchIconContainer>
          <SearchIcon />
        </HeaderSearchIconContainer>
      </HeaderSearch>

      <HeaderNavItems>
        <HeaderOption>
          <OptionLineOne>Hello, Sign in</OptionLineOne>
          <OptionLineTwo>Accounts & Lists</OptionLineTwo>
        </HeaderOption>

        <HeaderOption>
          <OptionLineOne>Return</OptionLineOne>
          <OptionLineTwo>& Orders</OptionLineTwo>
        </HeaderOption>
      </HeaderNavItems>
      <ShoppingCartIcon style={{ color: black }} />
      <CartCount>5</CartCount>
      <HeaderOptionCart></HeaderOptionCart>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  height: 60px;
  background-color: #0f1111;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderLogo = styled.div`
  img {
    width: 97px;
    margin-left: 17px;
    margin-top: 10px;
  }
`;
const HeaderOptionAddress = styled.div`
  padding: 10px 9px 10px 30px;
`;
const OptionLineOne = styled.div`
  color: white;
`;
const OptionLineTwo = styled.div`
  color: white;
  font-weight: 700;
`;

const HeaderSearch = styled.div`
  display: flex;
  flex-grow: 1;
  height: 40px;
`;
const HeaderSearchInput = styled.input`
  width: 100%;
`;
const HeaderSearchIconContainer = styled.div`
  background-color: #febd69;
  width: 45px;
  //   color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const HeaderNavItems = styled.div`
  display: flex;
`;
const HeaderOption = styled.div`
  padding: 10px 9px 10px 9px;
`;
const HeaderOptionCart = styled.div``;
const CartCount = styled.div`
  color: white;
`;
