import React from 'react';
import './App.css';
import Form from '../Form/Form';
import WorkoutList from '../WorkoutList/WorkoutList';

const App = () => {
  return (
    <div className="App">
      <h2>B&B Workout Generator</h2>
      <Form />
      <WorkoutList />
    </div>
  );
};

export default App;
