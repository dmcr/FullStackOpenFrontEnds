import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

const App = () => {
    // states
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    // state setters
    const setGoodState = newGood => setGood(newGood)
    const setNeutralState = newNeutral => setNeutral(newNeutral)
    const setBadState = newBad => setBad(newBad)

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
            content={unicafe} 
            goodState={good}
            setGoodState={setGoodState}     
            badState={bad}
            setBadState={setBadState}
            neutralState={neutral}
            setNeutralState={setNeutralState}
        />
        <Statistics 
            stateNames={unicafe.stateNames} 
            title={unicafe.titles.statistics}
            goodState={good}   
            badState={bad}
            neutralState={neutral}
        />
      </div>
    )
}

const Feedback = (props) => {
    return (
        <div>
            <Heading heading={props.content.titles.feedback} />
            <Button handleClick={() => props.setGoodState(props.goodState + 1)} name={props.content.stateNames[0]}     />
            <Button handleClick={() => props.setNeutralState(props.neutralState + 1)} name={props.content.stateNames[1]} />
            <Button handleClick={() => props.setBadState(props.badState + 1)} name={props.content.stateNames[2]} />
        </div>
    )
}

const Statistics = ({stateNames, title, goodState, neutralState, badState}) => {
    const all = goodState + neutralState + badState;
    const avg = goodState - badState;
    const pos = goodState / (goodState + badState + neutralState) * 100;
    //console.log({goodState})
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
