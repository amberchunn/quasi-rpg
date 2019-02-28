import React from 'react';
import Landing from './Components/Landing';
import styled from 'styled-components';

const MasterDiv = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 1000px;
    margin: auto;
    border: 2px solid red;
    background: black;
`;

class App extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }


    render() {
        return (
            <MasterDiv>

                

                <Landing />



            </MasterDiv>
        )
    }



}

export default App;