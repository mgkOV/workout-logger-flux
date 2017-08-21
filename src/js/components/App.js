import React, { Component } from 'react';
import actions from '../actions/actions';
import store from '../stores/appStore';
import dispatcher from '../dispatchers/dispatchers';
import AddForm from './AddForm';
import Workouts from './Workouts';

const getAppState = () => ({
  workouts: store.getWorkouts(),
  showForm: store.getShowForm()
});

class App extends Component {
  state = getAppState();

  componentDidMount() {
    store.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    store.removeChangeListener(this._onChange);
  }

  _onChange = () => {
    this.setState(getAppState());
  };

  onShowFormClick = () => {
    actions.showForm();
  };

  render() {
    let { showForm, workouts } = this.state;
    return (
      <div>
        <h1 className="text-center page-header">Workout Logger</h1>
        <button onClick={this.onShowFormClick} className="btn btn-primary">
          Show Form
        </button>
        <br />
        {showForm ? <AddForm /> : ''}
        <br />
        <Workouts workouts={workouts} />
      </div>
    );
  }
}

export default App;
