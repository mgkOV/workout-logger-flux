import dispatcher from '../dispatchers/dispatchers';
import c from '../constants/constants';
import { EventEmitter } from 'events';
import appApi from '../utils/appApi';

const CHANGE_EVENT = 'change';

let _workouts = [];
let _showForm = false;

const appStore = Object.assign({}, EventEmitter.prototype, {
  getShowForm() {
    return _showForm;
  },
  getWorkouts() {
    return _workouts;
  },
  showForm() {
    _showForm = true;
  },
  addWorkout(workout) {
    _workouts.push(workout);
  },
  deleteWorkout(id) {
    let idx = _workouts.findIndex(x => (x.id = id));
    _workouts.splice(idx, 1);
  },
  recieveWorkouts(workouts) {
    _workouts = workouts;
  },
  emitChange() {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener(cb) {
    this.on(CHANGE_EVENT, cb);
  },
  removeChangeListener(cb) {
    this.removeListener(CHANGE_EVENT, cb);
  }
});

dispatcher.register(payload => {
  const action = payload.action;

  switch (action.actionType) {
    case c.SHOW_FORM:
      appStore.showForm();
      appStore.emitChange();
      break;
    case c.LOG_WORKOUT:
      appStore.addWorkout(action.workout);
      appApi.addWorkout(action.workout);
      appStore.emitChange();
      break;
    case c.RECIEVE_WORKOUTS:
      appStore.recieveWorkouts(action.workouts);
      appStore.emitChange();
      break;
    case c.DELETE_WORKOUT:
      appStore.deleteWorkout(action.id);
      appApi.deleteWorkout(action.id);
      appStore.emitChange();
  }

  return true;
});

export default appStore;
