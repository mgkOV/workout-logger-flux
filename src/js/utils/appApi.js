import actions from '../actions/actions';

export default {
  addWorkout(workout) {
    try {
      let workouts = JSON.parse(localStorage.getItem('workouts')) || [];
      workouts.push(workout);
      localStorage.setItem('workouts', JSON.stringify(workouts));
    } catch (e) {}
  },

  recieveWorkouts() {
    try {
      let workouts = JSON.parse(localStorage.getItem('workouts')) || [];
      actions.recieveWorkouts(workouts);
    } catch (e) {}
  },

  deleteWorkout(id) {
    try {
      let workouts = JSON.parse(localStorage.getItem('workouts')) || [];
      let idx = workouts.findIndex(x => (x.id = id));
      workouts.splice(idx, 1);
      localStorage.setItem('workouts', JSON.stringify(workouts));
    } catch (e) {}
  }
};
