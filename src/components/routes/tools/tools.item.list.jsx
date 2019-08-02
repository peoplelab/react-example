import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Box from '../../layouts/Box';
import ButtonData from '../../forms/ButtonData';
import { types } from '../../../store/routes/tools.store';
import { callToolDetails } from '../../../controllers/routes/tools/tools.controller';
import WrapContext from './tools.wrapper';


const header = (
  <tr key="tool-header">
    <th>id</th>
    <th>type</th>
    <th>code</th>
    <th>diameter</th>
    <th>display name</th>
  </tr>
);


class ListItem extends PureComponent {
	constructor(props) {
    super(props);

    this.onFailure = this.onFailure.bind(this);
    this.onSuccess = this.onSuccess.bind(this);
    this.onError = this.onError.bind(this);
    this.onCallDetails = this.onCallDetails.bind(this);

    this.mapList = this.mapList.bind(this);
  }

  onFailure(failure) {
    const [, dispatch] = this.props.toolsContext;

    dispatch({
      type: types.ID_TOOL_FAILURE,
      payload: failure,
    });
  }

  onSuccess(success) {
    const [, dispatch] = this.props.toolsContext;

    dispatch({
      type: types.ID_TOOL_SUCCESS,
      payload: success,
    });
  }

  onError(error) {
    const [, dispatch] = this.props.toolsContext;

    dispatch({
      type: types.ID_TOOL_ERROR,
      payload: error,
    });
  }

  onCallDetails(event) {
    const { data } = event;

    const [state] = this.props.sessionContext;

    const session = {
      accessToken: state.session.accessToken,
      sessionId: state.session.sessionId,
    };

    callToolDetails({
      data,
      session,
      onSuccess: this.onSuccess,
      onFailure: this.onFailure,
      onError: this.onError,
    });
  }

  mapList(data) {
    const { id, type, code, diameter, displayName } = data;

    return (
      <tr key={`tool-${id}`}>
        <td>
          <ButtonData className="tools__button" onClick={this.onCallDetails} data={id}>
            {id}
          </ButtonData>
        </td>
        <td>
          {type}
        </td>
        <td>
          {code}
        </td>
        <td>
          {diameter}
        </td>
        <td>
          {displayName}
        </td>
      </tr>
    );
  }

	render() {
    const [state] = this.props.toolsContext;
    const { list } = state;

    if (list.length === 0) {
      return null;
    }

    const Table = list.map(this.mapList);

    return (
      <Box className="tools__group">
        <h2 className="tools__sub-title">
          List
        </h2>
        <table className="tools__table">
          <thead>
            {header}
          </thead>
          <tbody>
            {Table}
          </tbody>
        </table>
      </Box>
    );
	}
}


ListItem.propTypes = {
  sessionContext: PropTypes.array.isRequired,
  toolsContext: PropTypes.array.isRequired,
};

ListItem.defaultProps = {
};


export default WrapContext(ListItem);
