const AsyncRoute = (Component, key, reducers, sagas) => {
  __STORE.injectReducers(key, reducers);
  __STORE.saga.run(key, sagas);

  return Component;
};


export default AsyncRoute;
