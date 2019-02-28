import React from 'react';
import Landing from './Components/Landing';
import styled from 'styled-components';
import { Route, Link } from 'react-router-dom';
import Story from './Components/Story-Riddle/Story';

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
            <div>
                <MasterDiv>

                

                <Route exact path="/" component={Landing} />
                <Route path="/story" component={Story} />
                



                </MasterDiv>
                <Link className="link-story" to="/story">Story Sample</Link> 
            </div>
        )
    }



}

export default App;