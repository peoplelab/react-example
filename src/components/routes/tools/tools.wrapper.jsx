import React, { useContext } from 'react';

import { ToolsContext } from '../../../store/routes/tools.store';
import { SessionContext } from '../../../store/session.store';


const WrapContext = Component => (
  function Wrapper(props) {
    const sessionContext = useContext(SessionContext);
    const toolsContext = useContext(ToolsContext);

    const contextProps = { sessionContext, toolsContext };

    return <Component {...contextProps} {...props} />;
  }
);


export default WrapContext;
