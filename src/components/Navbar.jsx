

import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import Home from "../pages/Home";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  text-decoration: none;
`;
const Center = styled.div`
  flex: 1;
  text-decoration: none;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  text-decoration: none;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;
const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;


const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;
const Logo = styled.h1`
  font-weight: bold;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  ${mobile({ fontSize: "24px" })}
`;
const MenuItem = styled.div`
  margin-left: 25px;
  font-size: 14px;
  cursor: pointer;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  return (
   
      <Container>
        <Wrapper>
          <Left>
            <Language>EN</Language>
            <SearchContainer style={{ color: "gray", fontSize: 14 }}>
              <Input placeholder="search" />
              <Search />
            </SearchContainer>
          </Left>
          <Center>
            <Link to={'/ecommerce-ui'} style={{ textDecoration: 'none' }} >
            <Logo>
              ShopBae
            </Logo>
            </Link>
          </Center>
          <Right>
          <Link to={'/register'} style={{ textDecoration: 'none' }} >
            <MenuItem >SignUp </MenuItem>
            </Link>
            <Link to={'/login'} style={{ textDecoration: 'none' }} >
            <MenuItem>LogIn</MenuItem>
            </Link>
            <MenuItem>
              <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Right>
        </Wrapper>
        
      </Container>
   
  );
};

export default Navbar;
