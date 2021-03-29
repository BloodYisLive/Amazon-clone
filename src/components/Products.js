import React from "react";
import styled from "styled-components";

const Products = (props) => {
  return (
    <Container>
      <Image src={props.image} />
      <Title>{props.title}</Title>
      <Ratings>
        {Array(props.rating)
          .fill()
          .map((rating) => (
            <p>⭐</p>
          ))}
      </Ratings>
      <Price>{props.price}</Price>
      <AddToCartButton>Add to Cart</AddToCartButton>
    </Container>
  );
};

export default Products;

const Container = styled.div`
  display: flex;
  background-color: white;
  z-index: 100;
  flex: 1;
  padding: 20px;
  margin: 10px;
  max-height: 400px;
  flex-direction: column;
  flex-wrap: wrap;
`;
const Title = styled.span`
  font-weight: 400;
  font-size: 14px;
  color: #1193c6;
  cursor: pointer;

  :hover {
    color: #b12704;
  }
`;
const Price = styled.span`
  font-weight: 400;
  font-size: 14px;
  color: #b12704;

  :before {
    content: "₹ ";
  }
`;
const Ratings = styled.div`
  display: flex;
`;
const Image = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-height: 200px;
  object-fit: contain;
  cursor: pointer;
`;
const AddToCartButton = styled.button`
  background-color: #f0c14b;
  font-size: 14px;
  width: 100px;
  height: 30px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid;
  border-color: #a88734 #9c7e31 #846a29;
  border-radius: 3px;
  cursor: pointer;
  :focus {
    outline: none;
    box-shadow: 0 0 0 1px #f90;
  }
`;
