import React from 'react';
import './WorkoutList.css';
import Workout from '../Workout/Workout';

const WorkoutList = (props) => {
  return (
    <div className="WorkoutList">
      <h2>Here's what we suggest:</h2>
      <div>
        {props.workouts.map((workout) => (
          <Workout key={workout.id} workout={workout} />
        ))}
      </div>
    </div>
  );
};

export default WorkoutList;
