import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

const App = () => {
    // states
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [feedback, setFeedback] = useState(false)

    // Setters
    const handleFeedback = () => (!feedback) ? setFeedback(true) : null

    const handleGoodClick = () => {
        setGood(good + 1)
        handleFeedback()
    }

    const handleNeutralClick = () => {
        setNeutral(neutral + 1)
        handleFeedback()
    }

    const handleBadClick = () => {
        setBad(bad + 1)
        handleFeedback()
    }

    //page content
    const unicafe = {
        titles: {
            feedback: 'give feedback',
            statistics: 'statistics'
        },
        stateNames: [
            'good', 'neutral', 'bad', 'all', 'average', 'positive'
        ]
    }

    //construct page
    return (
      <div>
        <Feedback 
            title={unicafe.titles.feedback} 
            stateNames={unicafe.stateNames}
            handleGoodClick={handleGoodClick}     
            handleBadClick={handleBadClick}
            handleNeutralClick={handleNeutralClick}
        />
        <Statistics 
            stateNames={unicafe.stateNames} 
            title={unicafe.titles.statistics}
            goodState={good}   
            badState={bad}
            neutralState={neutral}
            feedbackState={feedback}
        />
      </div>
    )
}

const Feedback = (props) => {
    return (
        <div>
            <Heading heading={props.title} />
            <Button handleClick={props.handleGoodClick} name={props.stateNames[0]}     />
            <Button handleClick={props.handleNeutralClick} name={props.stateNames[1]} />
            <Button handleClick={props.handleBadClick} name={props.stateNames[2]} />
        </div>
    )
}

const Statistics = ({stateNames, title, goodState, neutralState, badState, feedbackState}) => {
    if (!feedbackState) return (<div><Heading heading={title} /> no feedback given</div>)

    const all = goodState + neutralState + badState;
    const avg = goodState - badState;
    const pos = goodState / (goodState + badState + neutralState) * 100;

    return (
        <div>
            <Heading heading={title} />
            <ul>
                <ListItem name={stateNames[0]} state={goodState} />
                <ListItem name={stateNames[1]} state={neutralState} />
                <ListItem name={stateNames[2]} state={badState} />
                <ListItem name={stateNames[3]} state={all} />
                <ListItem name={stateNames[4]} state={avg} />
                <ListItem name={stateNames[5]} state={pos + '%'} />
            </ul>
        </div>
    )
}

const ListItem = props => <li>{props.name} {props.state} </li>

const Button = props => <button onClick={props.handleClick}>{props.name}</button>

const Heading = props => <h1>{props.heading}</h1>


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
