import styled from "styled-components";
import {Link} from "react-router-dom";

export const Header = styled.header`
  height: 4rem;
  padding-top: 20px;
  width: 100%;
  background: transparent;
  max-width: 1920px;
  z-index: 20;
`

export const HeaderContainer = styled.div`
  margin: 0 3.5rem;
  height: 100%;
`

export const Logo = styled.h1`
  display: inline-block;
  color: ${props => props.theme.primary};
  margin-right: 25px;
  cursor: pointer;
  font-size: 1.8rem;
  text-transform: uppercase;
`

export const LoginButton = styled(Link)`
  background-color: ${props => props.theme.primary};
  border-radius: 3px;
  color: #fff;
  text-decoration: none;
  padding: 7px 17px;
  font-family: ${props => props.theme.font.sans};
  margin-top: .5rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1;
  float: right;
`