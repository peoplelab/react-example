import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';

import Box from '../../layouts/Box';
import { ToolsContext } from '../../../store/routes/tools.store';


const MainHeader = (
  <tr>
    <th>id</th>
    <th>type</th>
    <th>code</th>
    <th>diameter</th>
    <th>display name</th>
  </tr>
);

const AttributesHeader = (
  <tr>
    <th>id</th>
    <th>code</th>
    <th>display name</th>
    <th>value</th>
  </tr>
);


class DetailsItem extends PureComponent {
  static contextType = ToolsContext;

	constructor(props) {
    super(props);

    this.setAttributesTable = this.setAttributesTable.bind(this);
    this.setMainTable = this.setMainTable.bind(this);
  }

  setAttributesTable(data) {
    const {
      id,
      code,
      displayName,
      value,
    } = data;


    return (
    <tr key={`tool-detail-${id}`}>
      <td>
        {id}
      </td>
      <td>
        {code}
      </td>
      <td>
        {displayName}
      </td>
      <td>
        {value}
      </td>
    </tr>
    );
  }

  setMainTable() {
    const [state] = this.context;
    const { details } = state;

    const { id, type, code, displayName } = details;

    return (
      <tr>
        <td>
          {id}
        </td>
        <td>
          {type}
        </td>
        <td>
          {code}
        </td>
        <td>
          {displayName}
        </td>
      </tr>
    );
  }

	render() {
    const [state] = this.context;
    const { details } = state;
    if (!('id' in details)) {
      return null;
    }

    const { id, attributes = [] } = details;

    const MainTable = this.setMainTable();
    const AttributesTable = attributes.map(this.setAttributesTable);

    return (
      <Box className="tools__group">
        <h2 className="tools__sub-title">
          Current id: {id}
        </h2>
        <table className="tools__table">
          <thead>
            {MainHeader}
          </thead>
          <tbody>
            {MainTable}
          </tbody>
        </table>
        <table className="tools__table">
          <caption>Attributes</caption>
          <thead>
            {AttributesHeader}
          </thead>
          <tbody>
            {AttributesTable}
          </tbody>
        </table>
      </Box>
    );
	}
}


DetailsItem.propTypes = {
};

DetailsItem.defaultProps = {
};


export default DetailsItem;
