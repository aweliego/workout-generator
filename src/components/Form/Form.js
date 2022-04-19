import React from 'react';
import './Form.css';

const Form = () => {
  return (
    <div className="Form">
      <form onSubmit="" className="">
        <div className="form-group">
          <fieldset>
            <legend>Choose your workout type:</legend>
            <input
              type="radio"
              name="workout-type"
              value="Cardio"
              class="input-radio"
            />
            <label for="Cardio">Cardio</label>
            <br />
            <input
              type="radio"
              name="workout-type"
              value="Strength"
              class="input-radio"
            />
            <label for="Strength">Strength</label>
            <br />
            <input
              type="radio"
              name="workout-type"
              value="Mobility"
              class="input-radio"
            />
            <label for="Mobility">Mobility</label>
          </fieldset>
        </div>
        <div className="form-group">
          <label for="app">Choose the workout focus:</label>
          <br />
          <input
            type="checkbox"
            name="workout-focus"
            value="Above the belt"
            class="input-checkbox"
          />
          Above the belt
          <br />
          <input
            type="checkbox"
            name="workout-focus"
            value="Below the belt"
            class="input-checkbox"
          />
          Below the belt
          <br />
          <input
            type="checkbox"
            name="workout-focus"
            value="Abs"
            class="input-checkbox"
          />
          Abs
          <br />
          <input
            type="checkbox"
            name="workout-focus"
            value="Full body"
            class="input-checkbox"
          />
          Full body
          <br />
        </div>
        <div className="form-group">
          <fieldset>
            <legend>
              Workout level <small>(optional)</small>
            </legend>
            <input
              type="radio"
              name="workout-level"
              value="Beginner"
              class="input-radio"
            />
            <label for="Beginner">Beginner</label>
            <br />
            <input
              type="radio"
              name="workout-level"
              value="Intermediate"
              class="input-radio"
            />
            <label for="Intermediate">Intermediate</label>
            <br />
            <input
              type="radio"
              name="workout-level"
              value="Advanced"
              class="input-radio"
            />
            <label for="Advanced">Advanced</label>
          </fieldset>
        </div>
        <div className="form-group">
          <label for="app">
            Equipment <small>(optional)</small>:
          </label>
          <br />
          <input
            type="checkbox"
            name="equipment"
            value="Heavyweights"
            class="input-checkbox"
          />
          Heavyweights
          <br />
          <input
            type="checkbox"
            name="equipment"
            value="Kettlebell"
            class="input-checkbox"
          />
          Kettlebell
          <br />
          <input
            type="checkbox"
            name="equipment"
            value="Resistance band"
            class="input-checkbox"
          />
          Resistance band
          <br />
          <input
            type="checkbox"
            name="equipment"
            value="Jump rope"
            class="input-checkbox"
          />
          Jump rope
          <br />
          <input
            type="checkbox"
            name="equipment"
            value="Boxing bag"
            class="input-checkbox"
          />
          Boxing bag
          <br />
          <input
            type="checkbox"
            name="equipment"
            value="Gliders"
            class="input-checkbox"
          />
          Gliders
          <br />
          <input
            type="checkbox"
            name="equipment"
            value="Chair"
            class="input-checkbox"
          />
          Chair
          <br />
          <input
            type="checkbox"
            name="equipment"
            value="Equipment free"
            class="input-checkbox"
          />
          Equipment free
          <br />
        </div>
        <div className="form-group">
          <fieldset>
            <legend>
              Duration <small>(optional)</small>
            </legend>
            <input
              type="radio"
              name="workout-duration"
              value="Short"
              class="input-radio"
            />
            <label for="Short">Short ({'<'} 25 min)</label>
            <br />
            <input
              type="radio"
              name="workout-duration"
              value="Average"
              class="input-radio"
            />
            <label for="Average">Average (25 - 45 min)</label>
            <br />
            <input
              type="radio"
              name="workout-duration"
              value="Long"
              class="input-radio"
            />
            <label for="Long">Long ({'>'} 45 min)</label>
          </fieldset>
        </div>
      </form>
    </div>
  );
};

export default Form;
