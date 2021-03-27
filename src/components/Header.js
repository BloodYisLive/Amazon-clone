/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import RoomIcon from "@material-ui/icons/Room";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <HeaderLogo>
        <Link to='/'>
          <img src={"https://i.imgur.com/7I9Was5.png"}></img>
        </Link>
      </HeaderLogo>
      <HeaderOptionAddress>
        <RoomIcon className='location-icon' style={{ fontSize: 20 }} />

        <HeaderOption>
          <OptionLineOne>Hello</OptionLineOne>
          <OptionLineTwo>Select your address</OptionLineTwo>
        </HeaderOption>
      </HeaderOptionAddress>

      <HeaderSearch>
        <HeaderSearchInput text='text' />

        <HeaderSearchIconContainer>
          <SearchIcon className='search-icon' />
        </HeaderSearchIconContainer>
      </HeaderSearch>
      <IndiaFlagContainer>
        <Iflag>
          <img
            src={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_India.svg/800px-Flag_of_India.svg.png"
            }
          ></img>
        </Iflag>
      </IndiaFlagContainer>
      <HeaderNavItems>
        <HeaderOption2>
          <OptionLineOne>Hello, Sign in</OptionLineOne>
          <OptionLineTwo>Accounts & Lists</OptionLineTwo>
        </HeaderOption2>

        <HeaderOption2>
          <OptionLineOne>Return</OptionLineOne>
          <OptionLineTwo>& Orders</OptionLineTwo>
        </HeaderOption2>
      </HeaderNavItems>

      <HeaderOptionCart>
        <Link to='/cart'>
          <ShoppingCartIcon className='cart-icon' style={{ fontSize: 40 }} />
          <CartCount>5</CartCount>
        </Link>
      </HeaderOptionCart>
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
  display: flex;
  padding: 10px 25px 10px 25px;
  align-items: center;
`;
const OptionLineOne = styled.div`
  font-size: 12px;
  color: white;
  font-weight: 400;
`;
const OptionLineTwo = styled.div`
  font-size: 14px;
  color: white;
  font-weight: 700;
`;

const HeaderSearch = styled.div`
  display: flex;
  flex-grow: 1;
  height: 40px;
  border-radius: 5px;
  :focus-within {
    box-shadow: 0 0 0 3px #f90;
  }
`;
const HeaderSearchInput = styled.input`
  width: 100%;
  border-radius: 4px 0px 0px 4px;
  border-style: none;
  font-size: 15px;

  :focus {
    outline: none;
  }
`;
const HeaderSearchIconContainer = styled.div`
  background-color: #febd69;
  width: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0px 4px 4px 0px;
  cursor: pointer;

  :hover {
    background-color: #d1913d;
  }
`;
const HeaderNavItems = styled.div`
  display: flex;
`;
const HeaderOption = styled.div`
  padding: 10px 9px 10px 0px;
`;
const HeaderOption2 = styled.div`
  padding: 10px 9px 10px 25px;
`;
const HeaderOptionCart = styled.div`
  display: flex;
  a {
    display: flex;
    text-decoration: none;
  }
`;
const CartCount = styled.div`
  color: white;
  margin-right: 17px;
  font-size: 20px;
  color: orange;
`;
const IndiaFlagContainer = styled.div``;
const Iflag = styled.div`
  margin-left: 25px;
  img {
    width: 20px;
    height: 15px;
  }
`;
