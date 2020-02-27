import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  
    return (
      <div>
        <Header title={course.name}/>
        <Content contents={course.parts}/>
        <Total total={course.parts}/>
      </div>
    )
  }

  const Header = ({title}) => {
    return (
    <h1>{title}</h1>
    )
  }

  const Content = ({contents}) => {
    return (
    <div>
      <Part content={contents[0]} />
      <Part content={contents[1]} />
      <Part content={contents[2]} />
    </div>
    )
  }

  const Part = ({content}) => {
    return (
      <p>{content.name} {content.exercises}</p>
    )
  }

  const Total = ({total}) => {
    return (
    <p>Number of exercises {total[0].exercises + total[1].exercises + total[2].exercises}</p>
    )
  }


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
