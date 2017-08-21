import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';
import actions from '../actions/actions';

class AddForm extends Component {
  handleSubmit = e => {
    e.preventDefault();

    let workout = {
      id: uuidv4(),
      type: this.workoutType.value.trim(),
      minutes: this.minutes.value.trim(),
      miles: this.miles.value.trim(),
      date: new Date()
    };

    actions.logWorkout(workout);
    this.clearForm();
  };

  clearForm = () => {
    this.minutes.value = '';
    this.miles.value = '';
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={{ marginTop: '15px' }}>
        <div className="form-group">
          <select
            className="form-control"
            ref={type => (this.workoutType = type)}
          >
            <option value="Jogging">Jogging</option>
            <option value="Weight Lifting">Weight Lifting</option>
            <option value="Elliptical">Elliptical</option>
            <option value="Yoga">Yoga</option>
            <option value="other">other</option>
          </select>
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            ref={input => (this.minutes = input)}
            placeholder="Minutes"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            ref={input => (this.miles = input)}
            placeholder="Miles (optional)"
          />
        </div>
        <button type="submit" className="btn btn-default btn-block">
          Log Workout
        </button>
      </form>
    );
  }
}

export default AddForm;
