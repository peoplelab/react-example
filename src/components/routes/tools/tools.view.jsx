//----------------------------------------------------------------------------------------
// File: Tools.view.jsx		[components]
//
// Desc: Model principale della pagina "Gestione Tools"
// Path: /src/routes/Tools/components
//----------------------------------------------------------------------------------------

import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';


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
import { callToolsList } from '../../../controllers/routes/tools/tools.controller';

import '../../../styles/routes/tools.style.scss';


class ToolsRoute extends PureComponent {
	constructor(props) {
    super(props);

    this.state = {
      list: [],
      details  : {},
      error: null,
      failure: null,
    };

    this.updateState = this.updateState.bind(this);
    this.onCallList = this.onCallList.bind(this);
  }

  updateState(newState) {
    this.setState(newState);
  }

  onCallList() {
    const dispatch = this.updateState;

    callToolsList({ dispatch });
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
          <List toolsSetState={this.updateState} toolsGetState={this.state} />
          <Details toolsGetState={this.state} />
        </Box>
      </section>
    );
	}
}


ToolsRoute.propTypes = {
};

ToolsRoute.defaultProps = {
};


export default ToolsRoute;
