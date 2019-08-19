import React, { useContext } from 'react';

import { CultureContext } from '../../../store/routes/culture.store';
import { SessionContext } from '../../../store/session.store';


const WrapContext = Component => (
  function Wrapper(props) {
    const sessionContext = useContext(SessionContext);
    const cultureContext = useContext(CultureContext);

    const contextProps = { sessionContext, cultureContext };

    return <Component {...contextProps} {...props} />;
  }
);


export default WrapContext;
