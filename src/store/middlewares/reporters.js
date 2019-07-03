/* eslint-disable no-console */


const logger = store => next => (action) => {
  console.group(action.type);
  console.log('dispatching', action);
  console.log('previous state', store.getState());

  const result = next(action);

  console.log('next state', store.getState());
  console.groupEnd(action.type);

  return result;
};

const crashReporter = store => next => (action) => {
  try {
    return next(action);
  } catch (err) {
    console.group(action.type);
    console.error('Caught an exception!');
    console.log('current state', store.getState());
    console.error(err);
    console.groupEnd(action.type);

    throw err;
  }
};


const reporters = [
  logger,
  crashReporter,
];


export default reporters;
