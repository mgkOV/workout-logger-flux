import React from 'react';
import Workout from './Workout';

const Workouts = ({ workouts }) => {
  const renderWorkouts = () => {
    return workouts.map(workout => <Workout {...workout} key={workout.id} />);
  };

  return (
    <ul className="list-group">
      {renderWorkouts()}
    </ul>
  );
};

export default Workouts;
