import React from 'react';
import './Form.css';

const Form = () => {
  return (
    <div className="Form-container">
      <form className="Form">
        <div className="form-group">
            <legend>Choose your workout type:</legend>
            <input
              type="radio"
              name="workout-type"
              value="Cardio"
              className="input-radio"
            />
            <label htmlFor="Cardio">Cardio</label>
            <br />
            <input
              type="radio"
              name="workout-type"
              value="Strength"
              className="input-radio"
            />
            <label htmlFor="Strength">Strength</label>
            <br />
            <input
              type="radio"
              name="workout-type"
              value="Mobility"
              className="input-radio"
            />
            <label htmlFor="Mobility">Mobility</label>
        </div>
        <div className="form-group">
          <label htmlFor="app">Choose the workout focus:</label>
          <br />
          <input
            type="checkbox"
            name="workout-focus"
            value="Above the belt"
            className="input-checkbox"
          />
          Above the belt
          <br />
          <input
            type="checkbox"
            name="workout-focus"
            value="Below the belt"
            className="input-checkbox"
          />
          Below the belt
          <br />
          <input
            type="checkbox"
            name="workout-focus"
            value="Abs"
            className="input-checkbox"
          />
          Abs
          <br />
          <input
            type="checkbox"
            name="workout-focus"
            value="Full body"
            className="input-checkbox"
          />
          Full body
          <br />
        </div>
        <div className="form-group">
            <legend>
              Workout level <small>(optional)</small>
            </legend>
            <input
              type="radio"
              name="workout-level"
              value="Beginner"
              className="input-radio"
            />
            <label htmlFor="Beginner">Beginner</label>
            <br />
            <input
              type="radio"
              name="workout-level"
              value="Intermediate"
              className="input-radio"
            />
            <label htmlFor="Intermediate">Intermediate</label>
            <br />
            <input
              type="radio"
              name="workout-level"
              value="Advanced"
              className="input-radio"
            />
            <label htmlFor="Advanced">Advanced</label>
        </div>
        <div className="form-group">
          <label htmlFor="equipment">
            Equipment <small>(optional)</small>:
          </label>
          <br />
          <input
            type="checkbox"
            name="equipment"
            value="Heavyweights"
            className="input-checkbox"
          />
          Heavyweights
          <br />
          <input
            type="checkbox"
            name="equipment"
            value="Kettlebell"
            className="input-checkbox"
          />
          Kettlebell
          <br />
          <input
            type="checkbox"
            name="equipment"
            value="Resistance band"
            className="input-checkbox"
          />
          Resistance band
          <br />
          <input
            type="checkbox"
            name="equipment"
            value="Jump rope"
            className="input-checkbox"
          />
          Jump rope
          <br />
          <input
            type="checkbox"
            name="equipment"
            value="Boxing bag"
            className="input-checkbox"
          />
          Boxing bag
          <br />
          <input
            type="checkbox"
            name="equipment"
            value="Gliders"
            className="input-checkbox"
          />
          Gliders
          <br />
          <input
            type="checkbox"
            name="equipment"
            value="Chair"
            className="input-checkbox"
          />
          Chair
          <br />
          <input
            type="checkbox"
            name="equipment"
            value="Equipment free"
            className="input-checkbox"
          />
          Equipment free
          <br />
        </div>
        <div className="form-group">
            <legend>
              Duration <small>(optional)</small>
            </legend>
            <input
              type="radio"
              name="workout-duration"
              value="Short"
              className="input-radio"
            />
            <label htmlFor="Short">Short ({'<'} 25 min)</label>
            <br />
            <input
              type="radio"
              name="workout-duration"
              value="Average"
              className="input-radio"
            />
            <label htmlFor="Average">Average (25 - 45 min)</label>
            <br />
            <input
              type="radio"
              name="workout-duration"
              value="Long"
              className="input-radio"
            />
            <label htmlFor="Long">Long ({'>'} 45 min)</label>
        </div>
      </form>
      <input type="submit" value="Let's Go!" className="Form-submit" />
    </div>
  );
};

export default Form;
