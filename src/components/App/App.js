import React, { useState } from 'react';
import './App.css';
import Form from '../Form/Form';
import WorkoutList from '../WorkoutList/WorkoutList';
import { generateId } from '../../util/utilities';
//import { workouts } from '../../util/workouts';

const App = () => {
  const [workouts, setWorkouts] = useState([
    {
      id: generateId(),
      category: 'Sweat Box',
      type: 'cardio',
      focus: 'above the belt',
      level: 'advanced',
      equipment: 'heavyweights',
      duration: 'long',
      videoSrc:
        'https://christadipaolo.com/boxing-and-bubbles/player.php?data_load_id=249',
      imgSrc:
        'https://christadipaolo.com/boxing-and-bubbles/images/thumb/new_thumbs/1612726765.jpg',
    },
    {
      id: generateId(),
      category: 'Heavyweight',
      type: 'strength',
      focus: 'full body',
      level: 'intermediate',
      equipment: 'heavyweights',
      duration: 'average',
      videoSrc:
        'https://christadipaolo.com/boxing-and-bubbles/player.php?data_load_id=290',
      imgSrc:
        'https://christadipaolo.com/boxing-and-bubbles/images/thumb/new_thumbs/1628446683.jpg',
    },
    {
      id: generateId(),
      category: 'The Undercard',
      type: 'mobility',
      focus: 'below the belt',
      level: 'beginner',
      equipment: 'chair',
      duration: 'short',
      videoSrc:
        'https://christadipaolo.com/boxing-and-bubbles/player.php?data_load_id=245',
      imgSrc:
        'https://christadipaolo.com/boxing-and-bubbles/images/thumb/new_thumbs/1610904719.jpg',
    },
  ]);

  return (
    <div className="App">
      <h1>B&B Workout Generator</h1>
      <Form />
      <WorkoutList workouts={workouts} />
    </div>
  );
};

export default App;
