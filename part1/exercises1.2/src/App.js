import React from 'react';

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
};

const Part = (props) => {
  return (
    <>
      <p>
        {props.part} {props.exer}
      </p>
    </>
  );
};

const Content = (props) => {
  return (
    <div>
      <Part part={props.part.part1} exer={props.exer.exercises1} />
      <Part part={props.part.part2} exer={props.exer.exercises2} />
      <Part part={props.part.part3} exer={props.exer.exercises3} />
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
