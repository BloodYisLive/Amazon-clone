/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import styled from "styled-components";
import Products from "./Products";

const Home = () => {
  return (
    <Container>
      <Banner></Banner>
      <Content>
        <Products />
        <Products />
        <Products />
        <Products />
      </Content>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  max-width: 1500px;
  margin: 0 auto;
`;
const Banner = styled.div`
  background-image: url("https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Rajeshwari/March-21/Network_Hero_banners/HeroPC_1500x600_5._CB657961025_.jpg");
  min-height: 600px;
  background-position: center;
  background-size: cover;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  z-index: 2;
`;
const Content = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  margin-top: -360px;
  display: flex;
`;
