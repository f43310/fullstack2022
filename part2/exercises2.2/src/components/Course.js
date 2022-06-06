import React from 'react';

const Header = ({ course }) => <h1>{course}</h1>;
const Total = ({ sum }) => <p>Total of {sum} exercises </p>;
const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);

const Content = ({ parts }) => (
  <>
    {parts.map((part) => (
      <Part key={part.id} part={part} />
    ))}
  </>
);

const Course = ({ course }) => {
  const init = 0;
  const total = course.parts.reduce((s, p) => {
    console.log('what is happening', s, p);
    return s + p.exercises;
  }, init);
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total sum={total} />
    </div>
  );
};

export default Course;
