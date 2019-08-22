//----------------------------------------------------------------------------------------
// File: Tools.view.jsx		[components]
//
// Desc: Model principale della pagina "Gestione Tools"
// Path: /src/routes/Tools/components
//----------------------------------------------------------------------------------------

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';


// -------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------
// *** NOTA: "COMPONENTS" DOVR� DIVENTARE "SYSTEM/COMPONENTS" O "BASE.COMPONENTS", ECC.
// -------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------

// ** Carica i componenti predefiniti di sistema (snippets) **
import Box from '../../layouts/Box';
import Button from '../../layouts/Button';
import List from './tools.item.list';
import Details from './tools.item.details';
import WrapContext from './tools.wrapper';
import { callToolsList } from '../../../controllers/routes/tools/tools.controller';

import '../../../styles/routes/tools.style.scss';


class ToolsRoute extends PureComponent {
	constructor(props) {
    super(props);

    this.onCallList = this.onCallList.bind(this);
  }

  onCallList() {
    const { toolsContext, sessionContext } = this.props;
    const context = { toolsContext, sessionContext };

    callToolsList({ context });
  }

	render() {
    return (
      <section className="tools">
        <h1 className="tools__title">
          Tools
        </h1>
        <Box className="tools__container">
          <Box className="tools__group">
            <Button className="tools__button" onClick={this.onCallList}>
              Get tools list
            </Button>
          </Box>
          <List />
          <Details />
        </Box>
      </section>
    );
	}
}


ToolsRoute.propTypes = {
  sessionContext: PropTypes.array.isRequired,
  toolsContext: PropTypes.array.isRequired,
};

ToolsRoute.defaultProps = {
};


export default WrapContext(ToolsRoute);
