import React from 'react'
import styled from 'styled-components'
import BG from '../images/movie1.jpg'
import { mobile, XS } from '../responsive'

const Container = styled.div`
margin-top: 8rem;
    width: 100%;
    height: 550px;
    background: url(${BG});
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
`
const TitleContainer = styled.div`
  height: 282px;
  width: 490px;
  position: relative;
  left: 77px;
  ${mobile({ left: 'unset'})}
`;
const MainTitle = styled.h1`
  font-size: 72px;
  font-style: normal;
  font-weight: 700;
  line-height: 94px;
  letter-spacing: -0.05em;
  text-align: left;
  color: #fff;
  ${mobile({ textAlign: "center" })};
  ${XS({ fontSize: "40px", lineHeight: "40px" })};
`;

const HeroSection = () => {
  return (
    <Container>
        <TitleContainer>
            <MainTitle>Watch something incredible</MainTitle>
        </TitleContainer>
    </Container>
  )
}

export default HeroSection