import React from 'react';
import actions from '../actions/actions';

const Workout = ({ id, type, minutes, miles }) => {
  return (
    <li className="list-group-item">
      {type} - {minutes} minutes
      {miles ? ` | ${miles} miles` : ''}
      <a
        onClick={actions.deleteWorkout.bind(null, id)}
        href="#"
        className="deleteWorkout"
      >
        X
      </a>
    </li>
  );
};

export default Workout;
