import React from 'react';

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
};
const Content = (props) => {
  return (
    <div>
      <p>
        {props.part.part1} {props.exer.exercises1}
      </p>
      <p>
        {props.part.part2} {props.exer.exercises2}
      </p>
      <p>
        {props.part.part3} {props.exer.exercises3}
      </p>
    </div>
  );
};
const Total = (props) => {
  return (
    <div>
      <p>
        Number of exercises{' '}
        {props.exer.exercises1 + props.exer.exercises2 + props.exer.exercises3}
      </p>
    </div>
  );
};

const App = () => {
  const course = 'Half Stack application development';
  const part1 = 'Fundamentals of React';
  const exercises1 = 10;
  const part2 = 'Using props to pass data';
  const exercises2 = 7;
  const part3 = 'State of a component';
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content
        part={{ part1, part2, part3 }}
        exer={{ exercises1, exercises2, exercises3 }}
      />
      <Total exer={{ exercises1, exercises2, exercises3 }} />
    </div>
  );
};

export default App;
