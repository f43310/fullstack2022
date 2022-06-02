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
      <Part part={props.part.part1.name} exer={props.part.part1.exercises} />
      <Part part={props.part.part2.name} exer={props.part.part2.exercises} />
      <Part part={props.part.part3.name} exer={props.part.part3.exercises} />
    </div>
  );
};
const Total = (props) => {
  return (
    <div>
      <p>
        Number of exercises{' '}
        {props.exer.part1.exercises +
          props.exer.part2.exercises +
          props.exer.part3.exercises}
      </p>
    </div>
  );
};

const App = () => {
  const course = 'Half Stack application development';
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10,
  };
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7,
  };
  const part3 = {
    name: 'State of a component',
    exercises: 14,
  };

  return (
    <div>
      <Header course={course} />
      <Content part={{ part1, part2, part3 }} />
      <Total exer={{ part1, part2, part3 }} />
    </div>
  );
};

export default App;
