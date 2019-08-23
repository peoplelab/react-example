import React, { useContext } from 'react';

import { SessionContext } from '../../../store/session.store.jsx';


const WrapContext = Component => (
  function Wrapper(props) {
    const sessionContext = useContext(SessionContext);

    const contextProps = { sessionContext };

    return <Component {...contextProps} {...props} />;
  }
);


export default WrapContext;
