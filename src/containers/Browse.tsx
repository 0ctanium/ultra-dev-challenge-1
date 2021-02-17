import React from "react";
import styled from "styled-components";
import useScrollEvent from "../hook/useScrollEvent";
import {Logo} from "../components/Header";
import {AiFillCaretDown, AiOutlineGift, BiInfoCircle, BiPlay, FaBell, FaSearch} from "react-icons/all";
import { Link } from "react-router-dom";
import { IconButton } from "../components/IconButton";
import {Button} from "../components/Button";

const Container = styled.div`
  min-height: 500vh;
  background: #141414;
`

const Header = styled.header`
  height: 70px;
  left: 0;
  right: 0;
  z-index: 1;
  top: 0;
  padding: 0 60px;
  background-color: ${props => 
          // @ts-ignore
          props.fixed ? '#141414' : 'transparent'};
  position: fixed;
  transition: background-color .4s;
  display: flex;
  align-items: center;
  color: #fff;
  
  ${Logo} {
    vertical-align: middle;
  }
  
  & nav {
    display: inline-block;
    
    & a {
      text-decoration: none;
      font-family: ${props => props.theme.font.sans};
      margin-left: 20px;
      font-weight: 400;
      line-height: 17px;
      font-size: .8rem;
      color: #e5e5e5;
      transition: color .4s;
      
      &:hover:not(.active) {
        color: #b3b3b3;
      }
      
      &.active {
        font-weight: 700;
      }
    }
  }
  
  & .secondary-nav {
    display: flex;
    align-items: center;
    font-size: 14px;
    line-height: 14px;
    
    & > div {
      margin-right: 20px;
      text-transform: uppercase;
      
      & svg {
        font-size: 1.3rem;
      }
      
      & img {
        height: 32px;
        width: 32px;
        
        border-radius: 4px;
      }
    }
  }
`;

const Grow = styled.div`
  flex-grow: 1
`;

const Hero = styled.div`
  position: absolute;
  background-color: #000;
  background-image: url('/static/casa_de_papel-background.png');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  width: 100%;
  height: 56.25vw;
  z-index: 0;
  overflow: hidden;
  
  &::before {
    content: '';
    display: block;
    background-image: linear-gradient(to bottom,rgba(20,20,20,0) 0,rgba(20,20,20,.15) 15%,rgba(20,20,20,.35) 29%,rgba(20,20,20,.58) 44%,#141414 68%,#141414 100%);
    background-size: 100% 100%;
    background-position: 0 top;
    background-repeat: repeat-x;
    background-color: transparent;
    width: 100%;
    height: 14.7vw;
    top: auto;
    bottom: -1px;
    opacity: 1;

    z-index: 8;
    position: absolute;
    left: 0;
    right: 0;
  }
  
  & .info {
    position: absolute;
    left: 60px;
    bottom: 35%;
    width: 36%;
    z-index: 10;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    
    & .title {
      
    }
    
    & .action {
      display: flex;
      
      ${Button} {
        margin-right: 1rem;
        margin-bottom: 1rem;
      }
    }
  }
`

const Browse: React.FC = () => {
    const fixed = useScrollEvent();

    return (
        <Container>
            <Header
                // @ts-ignore
                fixed={fixed}>
                <Logo>Noutflix</Logo>
                <nav>
                    <Link to={"/browse"} className="active">Accueil</Link>
                    <Link to={"/browse/genre/83"}>Séries</Link>
                    <Link to={"/browse/genre/34399"}>Films</Link>
                    <Link to={"/latest"}>Nouveautés les plus regardées</Link>
                    <Link to={"/browse/my-list"}>Ma liste</Link>
                </nav>
                <Grow />
                <div className="secondary-nav">
                    <div>
                        <IconButton>
                            <FaSearch />
                        </IconButton>
                    </div>
                    <div>
                        <span>direct</span>
                    </div>
                    <div>
                        <AiOutlineGift />
                    </div>
                    <div>
                        <FaBell />
                    </div>
                    <div>
                        <img src="/static/user.png" alt={"user-profile"} />
                        <span>
                            <AiFillCaretDown />
                        </span>
                    </div>
                </div>
            </Header>
            <Hero>
                <div className="info">
                    <img src="/static/casa_de_papel-title.png" alt="title" />
                    <h3 className="title">Huit voleurs font une prise d'otages dans la Maison royale de la Monnaie d'Espagne, tandis qu'un génie du crime manipule la police pour mettre son plan à exécution.</h3>
                    <div className="actions">
                        <Button><BiPlay/> Lecture</Button>
                        <Button><BiInfoCircle /> Plus d'infos</Button>
                    </div>
                </div>
            </Hero>
        </Container>
    )
}

export default Browse