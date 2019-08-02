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
import Button from '../../forms/Button';
import List from './tools.item.list';
import Details from './tools.item.details';
import { types } from '../../../store/routes/tools.store';
import { callToolsList } from '../../../controllers/routes/tools/tools.controller';
import WrapContext from './tools.wrapper';

import '../../../styles/routes/tools.style.scss';


class ToolsRoute extends PureComponent {
	constructor(props) {
    super(props);

    this.onFailure = this.onFailure.bind(this);
    this.onSuccess = this.onSuccess.bind(this);
    this.onError = this.onError.bind(this);
    this.onCallList = this.onCallList.bind(this);
  }

  onFailure(failure) {
    const [, dispatch] = this.props.toolsContext;

    dispatch({
      type: types.TOOLS_FAILURE,
      payload: failure,
    });
  }

  onSuccess(success) {
    const [, dispatch] = this.props.toolsContext;

    dispatch({
      type: types.TOOLS_SUCCESS,
      payload: success,
    });
  }

  onError(error) {
    const [, dispatch] = this.props.toolsContext;

    dispatch({
      type: types.TOOLS_ERROR,
      payload: error,
    });
  }

  onCallList() {
    const [state] = this.props.sessionContext;

    const session = {
      accessToken: state.session.accessToken,
      sessionId: state.session.sessionId,
    };

    callToolsList({
      session,
      onSuccess: this.onSuccess,
      onFailure: this.onFailure,
      onError: this.onError,
    });
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
