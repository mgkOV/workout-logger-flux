import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import appApi from './utils/appApi';

appApi.recieveWorkouts();

render(<App />, document.getElementById('app'));
