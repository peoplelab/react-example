import React, { useContext } from 'react';

import { ToolsContext } from '../../../store/routes/tools.store';
import { SessionContext } from '../../../store/session.store';


const WrapContext = Component => (
  function Wrapper(props) {
    const sessionContext = useContext(SessionContext);
    const toolsContext = useContext(ToolsContext);

    return <Component sessionContext={sessionContext} toolsContext={toolsContext} {...props} />;
  }
);


export default WrapContext;
