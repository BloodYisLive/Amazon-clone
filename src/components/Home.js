/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import Products from "./Products";
import { db } from "../firebase";
const Home = () => {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    db.collection("products").onSnapshot((snapshot) => {
      let tempProducts = [];

      tempProducts = snapshot.docs.map((doc) => ({
        id: doc.id,
        product: doc.data(),
      }));
      setProducts(tempProducts);
    });
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Container>
      <Banner></Banner>
      <Content>
        {products.map((data) => (
          <Products
            title={data.product.name}
            price={data.product.price}
            rating={data.product.rating}
            image={data.product.image}
          />
        ))}
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
