import React from 'react';
import './Story.css';

class Story extends React.Component {
    constructor (props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="tempStoryWrap">
                <div className="storyCard">
                    <h1>Location Name</h1>
                    <h2>Speaker or Story</h2>
                    <p>All the story text here</p>
                    <h5>Choice</h5>
                    <h5>Choice</h5>
                    <h5>Choice</h5>
                    <h5>Choice</h5>
                </div>
            
            </div>


        )
    }
}

export default Story;