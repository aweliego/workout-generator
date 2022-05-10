import React from 'react';
import './Workout.css';

const Workout = (props) => {
  const { category, videoSrc, imgSrc } = props.workout;

  return (
    <div className="Workout">
      <h3>{category}</h3>
      <a href={videoSrc} target="_blank">
        <img src={imgSrc} alt=""></img>
      </a>
    </div>
  );
};

export default Workout;
