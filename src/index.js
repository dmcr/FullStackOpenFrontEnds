import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14
  
    return (
      <div>
        <Header title={course}/>
        <Exercises title={part1} exercises={exercises1}/>
        <Exercises title={part2} exercises={exercises2}/>
        <Exercises title={part3} exercises={exercises3}/>
        <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
      </div>
    )
  }

  const Header = ({title}) => {
    return (
    <h1>{title}</h1>
    )
  }

  const Exercises = ({title, exercises}) => {
    return (
      <p>
        {title} {exercises}
      </p>
    )
  }

  const Total = ({exercises1, exercises2, exercises3}) => {
    return (
    <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    )
  }


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
