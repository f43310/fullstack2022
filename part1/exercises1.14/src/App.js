import React, { useState } from 'react';
let index = 0; // vote index

const Mostvotes = ({ anecdotes, voteArr, mostIndex }) => {
  if (voteArr.every((item) => item === 0)) {
    return <div>No votes</div>;
  }
  return <div>{anecdotes[mostIndex]}</div>;
};

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients',
  ];

  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0));

  const num = () => {
    let num = 0;
    num = Math.floor(Math.random() * anecdotes.length);
    console.log(num);
    index = num;
    return num;
  };

  // why next line is not working right?
  // const num = Math.floor(Math.random() * anecdotes.length);
  // console.log(num);

  const pointsCopy = (i) => {
    console.log('i', i);
    let copy = [...points];
    copy[i] += 1;
    console.log(copy);
    return copy;
  };

  const mostIndex = () => {
    let max = Math.max(...points);
    let index = points.map((item) => item).indexOf(max);
    return index;
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[selected]}</div>
      <button onClick={() => setPoints(pointsCopy(index))}>vote</button>
      <button onClick={() => setSelected(num())}>next anecdote</button>
      <h1>Anecdote with most votes</h1>
      <Mostvotes
        anecdotes={anecdotes}
        voteArr={points}
        mostIndex={mostIndex()}
      />
    </div>
  );
};

export default App;
