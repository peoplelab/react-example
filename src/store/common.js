import React, { memo, createContext, useContext, useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import Enum from './Enum';


// ---------------------
// Store reducer handler
//----------------------

const reducer = (
  (initial, handler) =>
    (state = initial, action) =>
      handler(state, action.payload)[action.type] || state
);


// ---------------------
// Store types generator
//----------------------

export const enumTypes = Enum.from;
// const types = enumTypes('TYPE_1', ..., 'TYPE_N');


// ------------
// Create Store
// ------------
export const createStore = () => {
  // Store context
  const StoreContext = createContext();
  //  class ReactComponent  extends [Component!PureComponent] {
  //    static contextType = StateContext;
  //    ...
  //    onEvent(event) {
  //      ...
  //      dispatch({ type: type, payload: payload });
  //      ...
  //    }
  //    render() {
  //      const [state, dispatch] = this.context;
  //      ...
  //    }
  //  }
  //
  // dispatch({ type: type, payload: payload });

  // use Store context
  const useStore = () => useContext(StoreContext);
  // const [state, dispatch] = useStore();
  // ...
  // dispatch({ type: type, payload: payload });


  // --------------
  // Store provider
  //---------------
  const Store = (props) => {
    const { children, handler, initial } = props;

    const storeReducer = reducer(initial, handler);

    return (
      <StoreContext.Provider value={useReducer(storeReducer, initial)}>
        {children}
      </StoreContext.Provider>
    );
  };
  Store.propTypes = {
    children: PropTypes.node.isRequired,
    handler: PropTypes.func.isRequired,
    initial: PropTypes.object.isRequired,
  };
  Store.defaultProps = {
  };
  // enable store immutability
  const StoreProvider = memo(Store);
  //  <StoreProvider initial={initial} handler={handler}>
  //    {children}
  //  </StoreProvider>


  // return Store handlers
  return ({
    StoreContext,
    useStore,
    StoreProvider,
  });
};
