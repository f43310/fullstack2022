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
      <Part part={props.part[0].name} exer={props.part[0].exercises} />
      <Part part={props.part[1].name} exer={props.part[1].exercises} />
      <Part part={props.part[2].name} exer={props.part[2].exercises} />
    </div>
  );
};
const Total = (props) => {
  return (
    <div>
      <p>
        Number of exercises{' '}
        {props.exer[0].exercises +
          props.exer[1].exercises +
          props.exer[2].exercises}
      </p>
    </div>
  );
};

const App = () => {
  const course = 'Half Stack application development';
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10,
    },
    {
      name: 'Using props to pass data',
      exercises: 7,
    },
    {
      name: 'State of a component',
      exercises: 14,
    },
  ];

  return (
    <div>
      <Header course={course} />
      <Content part={parts} />
      <Total exer={parts} />
    </div>
  );
};

export default App;
