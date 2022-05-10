import React, { useState } from 'react';
import './Form.css';
import {
  workoutTypes,
  workoutFocus,
  workoutLevels,
  equipments,
  workoutDurations,
} from '../../util/criteria';

const Form = (props) => {
  const [checkedType, setType] = useState(
    new Array(workoutTypes.length).fill(false)
  );
  const [checkedFocus, setFocus] = useState(
    new Array(workoutFocus.length).fill(false)
  );
  const [checkedLevel, setLevel] = useState(
    new Array(workoutLevels.length).fill(false)
  );
  const [checkedEquipment, setEquipment] = useState(
    new Array(equipments.length).fill(false)
  );
  const [checkedDuration, setDuration] = useState(
    new Array(workoutDurations.length).fill(false)
  );

  console.log('This is the types array: ' + checkedType);
  console.log('This is the focus array: ' + checkedFocus);

  const handleChange = (position) => {
    // const updatedCheckedType = checkedType.map((criteria, index) =>
    //   index === position ? !criteria : criteria
    // );
    // setType(updatedCheckedType);
    // console.log('This is the updatedCheckedType array: ' + updatedCheckedType);

    const updatedCheckedFocus = checkedFocus.map((criteria, index) =>
      index === position ? !criteria : criteria
    );
    setType(updatedCheckedFocus);
    console.log(
      'This is the updatedCheckedFocus array: ' + updatedCheckedFocus
    );
  };

  const { defineCriteria } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="Form-container">
      <form className="Form">
        {/* TYPE */}
        <div className="form-group">
          <legend>Choose your workout type:</legend>
          {workoutTypes.map(({ name, label }, index) => {
            return (
              <>
                <input
                  id={`custom-checkbox-${index}`}
                  type="radio"
                  name={name}
                  value={name}
                  className="input-radio"
                  checked={checkedType[index]}
                  onChange={() => handleChange(index)}
                />
                <label htmlFor="{label}">{label}</label>
                <br />
              </>
            );
          })}
        </div>

        {/* FOCUS */}
        <div className="form-group">
          <label htmlFor="workout-focus">Choose the workout focus:</label>
          <br />
          {workoutFocus.map(({ name }, index) => {
            return (
              <>
                <input
                  id={`custom-checkbox-${index}`}
                  type="checkbox"
                  name={name}
                  value={name}
                  className="input-checkbox"
                  checked={checkedFocus[index]}
                  onChange={() => handleChange(index)}
                />
                {name}
                <br />
              </>
            );
          })}
        </div>

        {/* LEVELS */}
        <div className="form-group">
          <legend>
            Workout level <small>(optional)</small>
          </legend>
          {workoutLevels.map(({ name, label }, index) => {
            return (
              <>
                <input
                  id={`custom-checkbox-${index}`}
                  type="radio"
                  name={name}
                  value={name}
                  className="input-radio"
                  checked={checkedLevel[index]}
                  // onChange={() => handleChange(index)}
                />
                <label htmlFor="{label}">{label}</label>
                <br />
              </>
            );
          })}
        </div>

        {/* EQUIPMENT */}
        <div className="form-group">
          <label htmlFor="equipment">
            Equipment <small>(optional)</small>:
          </label>
          <br />
          {equipments.map(({ name }, index) => {
            return (
              <>
                <input
                  id={`custom-checkbox-${index}`}
                  type="checkbox"
                  name={name}
                  value={name}
                  className="input-checkbox"
                  checked={checkedEquipment[index]}
                  // onChange={() => handleChange(index)}
                />
                {name}
                <br />
              </>
            );
          })}
        </div>

        {/* DURATION */}
        <div className="form-group">
          <legend>
            Duration <small>(optional)</small>
          </legend>
          {workoutDurations.map(({ name, label }, index) => {
            return (
              <>
                <input
                  id={`custom-checkbox-${index}`}
                  type="radio"
                  name={name}
                  value={name}
                  className="input-radio"
                  checked={checkedDuration[index]}
                  // onChange={() => handleChange(index)}
                />
                <label htmlFor="{label}">{label}</label>
                <br />
              </>
            );
          })}
        </div>
      </form>

      {/* SUBMIT */}
      <input
        type="submit"
        value="Let's Go!"
        className="Form-submit"
        onClick={handleSubmit}
      />
    </div>
  );
};

export default Form;
