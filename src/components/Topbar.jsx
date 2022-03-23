import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    background: #292929;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 140px;
    display: flex;
    align-items: center;
`;
const Logo = styled.span`
    border: 1px solid #fff;
    color: #fff;
    padding: 5px;
    position: relative;
    left: 77px;
`

const Topbar = () => {
  return (
    <Container>
        <Logo>MyTestApp</Logo>
    </Container>
  )
}

export default Topbar