import React, { useState } from 'react';
const Title = ({ text }) => <h1>{text}</h1>;
const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);
const Display = (props) => (
  <div>
    {props.text} {props.value}
  </div>
);
const All = (props) => {
  const sum = (array) => {
    let sum = 0;
    array.forEach((ele) => {
      sum += ele;
    });
    return sum;
  };
  return <div>all {sum(props.all)}</div>;
};
const Average = (props) => {
  const sum = (array) => {
    let sum = 0;
    array.forEach((ele) => {
      sum += ele;
    });
    return sum;
  };
  const average = (array) => {
    return (array[0] * 1 + array[1] * 0 + array[2] * -1) / sum(props.all) || 0;
  };
  return <div>average {average(props.all)}</div>;
};
const Positive = (props) => {
  const sum = (array) => {
    let sum = 0;
    array.forEach((ele) => {
      sum += ele;
    });
    return sum;
  };
  const positive = (array) => {
    return (array[0] / sum(props.all)) * 100 || 0;
  };
  return <div>positive {positive(props.all) + ' %'}</div>;
};
const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <Title text="give feedback" />
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <Title text="statistics" />
      <Display text="good" value={good} />
      <Display text="neutral" value={neutral} />
      <Display text="bad" value={bad} />
      <All all={[good, neutral, bad]} />
      <Average all={[good, neutral, bad]} />
      <Positive all={[good, neutral, bad]} />
    </div>
  );
};

export default App;
