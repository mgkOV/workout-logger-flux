import dispatcher from '../dispatchers/dispatchers';
import c from '../constants/constants';

export default {
  showForm() {
    dispatcher.handleViewAction({
      actionType: c.SHOW_FORM
    });
  },

  logWorkout(workout) {
    dispatcher.handleViewAction({
      actionType: c.LOG_WORKOUT,
      workout
    });
  },

  recieveWorkouts(workouts) {
    dispatcher.handleViewAction({
      actionType: c.RECIEVE_WORKOUTS,
      workouts
    });
  },

  deleteWorkout(id) {
    dispatcher.handleViewAction({
      actionType: c.DELETE_WORKOUT,
      id
    });
  }
};
