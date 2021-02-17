import React from "react";
import styled from "styled-components";
import {BsChevronRight} from "react-icons/bs";
import {TextField} from "../components/Input";
import {Header, HeaderContainer, LoginButton, Logo} from "../components/Header";

const Root = styled.div`
`;

const Section = styled.section`
  position: relative;
  border-bottom: 8px solid #222;
  padding: 50px 5%;
  color: #fff;
`

const SectionContent = styled.div`
  position: relative;
  width: 100%;
  padding: 75px 0;
  max-width: 950px;
  margin: 0 auto;
  text-align: center;
  z-index: 1;
`

const SectionTitle = styled.h1`
  font-size: 3.125rem;
  line-height: 1.1;
  margin-bottom: .5rem;
`

const SectionSubTitle = styled.h2`
  font-size: 1.625rem;
  font-weight: 400;
`

const HeroBackGround = styled.div`
  position: absolute;
  top: -100px;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  width: 100%;
  z-index: -1;
`

const Hero = styled(Section)`
  padding: 70px 45px;
  & h1, h2 {
    max-width: 800px;
    margin: 0 auto;
  }
  
  ${SectionTitle} & {
    font-size: 4rem;
  }
  
  ${SectionSubTitle} & {
    font-size: 1.625rem;
    margin: 1rem auto;
  }
`

const EmailFormTitle = styled.h3`
  max-width: none;
  padding: 0 5%;
  padding-bottom: 20px;
  font-size: 1.2rem;
  margin: 0 auto;
  font-weight: 400;
`;

const EmailFormInput = styled(TextField)`
  min-width: 500px;
  height: 70px;
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
`;

const EmailFormSubmit = styled.button`
  background-color: ${props => props.theme.primary};
  color: #fff;
  border: 0;
  border-radius: 0;
  border-left: 1px solid #333;
  padding: 0 30px;
  outline: none;
  
  &:hover {
    background-color: ${props => props.theme.primaryDarker};
  }
  
  &:focus {
    outline: black;
  }
`;

const Home: React.FC = () => {
    return (
        <Root id="home">
            <Header>
                <HeaderContainer>
                    <Logo>Noutfix</Logo>
                    <LoginButton to="/login">S'identifier</LoginButton>
                </HeaderContainer>
            </Header>
            <main>
                <Hero>
                    <HeroBackGround>
                        <img src="/static/background.jpg" alt="hero-background"/>
                    </HeroBackGround>
                    <SectionContent>
                        <SectionTitle>Films, séries TV et bien plus en illimité.</SectionTitle>
                        <SectionSubTitle>Où que vous soyez. Annulez à tout moment.</SectionSubTitle>
                        <form>
                            <EmailFormTitle>Prêt à regarder Netflix ? Saisissez votre adresse e-mail pour vous abonner ou réactiver votre abonnement.</EmailFormTitle>
                            <div>
                                <EmailFormInput type={"email"} placeholder={"Adresse e-mail"} required/>
                                <EmailFormSubmit type={"submit"}>Commencer <BsChevronRight/></EmailFormSubmit>
                            </div>
                        </form>
                    </SectionContent>
                </Hero>
            </main>
        </Root>
    );
};

export default Home;