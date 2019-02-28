import React from 'react';
import styled from 'styled-components';
import './Landing.css';

const LandingMasterDiv = styled.div`
    width: 1000px;
    height: 900px;
    display: flex;
    justify-content: center;
    border: 2px solid blue;
    object-fit: cover;
    background-image: url(/Images/SunsetField.png);
    background-size: cover;
`;

const LogoContainer = styled.div`
    display: flex;
    margin-top: 250px;
`;

const Logo = styled.div`
    font-size: 2rem;
    color: rgb(148, 10, 10);
    position: relative;
    left: 20px;
    top: 10px;
`;

const LogoH1 = styled.h1`
    font-family: 'Ruge Boogie', cursive;
    font-size: 5rem;
    border: 3px double goldenrod;
    color: goldenrod;
    height: 80px;
    border-radius: 8px;
    padding: 10px 20px;
    background: black;
`;

const Landing = props => {
    return (
        <LandingMasterDiv>
            <LogoContainer>
                <Logo>
                    <i class="fas fa-dragon"></i>
                </Logo>
                <LogoH1>QuasiRPG</LogoH1>
            </LogoContainer>
        </LandingMasterDiv>
    )
    
}

export default Landing;