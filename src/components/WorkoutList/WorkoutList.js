import React from 'react';
import './WorkoutList.css';
import Workout from '../Workout/Workout';

const WorkoutList = (props) => {
  return (
    <>
      <h2>Here's what we suggest:</h2>
      <div className="WorkoutList">
        {props.workouts.map((workout) => (
          <Workout key={workout.id} workout={workout} />
        ))}
      </div>
    </>
  );
};

export default WorkoutList;
