import { Dispatcher } from 'flux';

const appDispatcher = Object.assign(new Dispatcher(), {
  handleViewAction(action) {
    const payload = {
      source: 'VIEW_ACTION',
      action
    };

    this.dispatch(payload);
  }
});

export default appDispatcher;
