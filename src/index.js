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
        <Content content={[[part1, exercises1], [part2, exercises2], [part3, exercises3]]}/>
        <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
      </div>
    )
  }

  const Header = ({title}) => {
    return (
    <h1>{title}</h1>
    )
  }

  const Content = ({content}) => {
    return (
    <div>
      <Part title={content[0][0]} numberOf={content[0][1]} />
      <Part title={content[1][0]} numberOf={content[1][1]} />
      <Part title={content[2][0]} numberOf={content[2][1]} />
    </div>
    )
  }

  const Part = ({title}, {numberOf}) => {
    return (
      <p>{title} {numberOf}</p>
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
