import React from "react";
import styled from "styled-components";
import {Header, HeaderContainer, Logo} from "../components/Header";

const Background = styled.div`
  background-size: cover;
  display: block;
  height: 100%;
  min-height: 100vh;
  overflow: hidden;
  position: absolute;
  width: 100%;
  z-index: -1;
  
  & img{
    min-width: 100%;
    min-height: 100%;
  }
`

const SignIn: React.FC = () => {
    return (
        <div>
            <Background>
                <img  src="/static/background.jpg" alt="background" />
            </Background>
            <Header>
                <HeaderContainer>
                    <Logo>Noutfix</Logo>
                </HeaderContainer>
            </Header>
        </div>
    )
}

export default SignIn