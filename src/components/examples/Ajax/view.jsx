/* eslint-disable react/prop-types */

import React from 'react';
// import ReactDOM from 'react-dom';
// import $ from 'jquery';
import { callApi } from './controller';

export const Heading =  (props) => {
  var headingStyle = {
    backgroundColor: 'FloralWhite',
    fontSize: '19px'
  };
  return (<th style={headingStyle}>{props.heading}</th>);
};

export const Headings = (props) => {
  var headings = props.headings.map(function (name, index) {
    return (<Heading key={"heading-" + index} heading={name}/>);
  });
  return (<thead><tr className='table-th'>{headings}</tr></thead>);
};

export const Row = (props) => {
  var trStyle = {backgroundColor: 'aliceblue'};
  return (
    <tr style={trStyle}>
      <td>{props.changeSet.when}</td>
      <td>{props.changeSet.who}</td>
      <td>{props.changeSet.description}</td>
    </tr>
  );
};

export const Rows = (props) => {
  var rows = props.changeSets.map(function (changeSet, index) {
    return (<Row key={index} changeSet={changeSet}/>);
  });

  return (<tbody>{rows}</tbody>);
};

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { changeSets: [] };

    this.setter = this.setter.bind(this);
  }

  componentDidMount() {
    callApi(this.setter, this.error);
  }

  setter(changeSets) {
    this.setState({ changeSets: changeSets });
  }

  render() {
  return (
    <table className='table'>
      {/* <tbody> */}
        <Headings headings={this.props.headings}/>
        <Rows changeSets={this.state.changeSets}/>
      {/* </tbody> */}
    </table>
  );
  }
}

var headings = ['Updated at ', 'Author', 'Change'];

const Root = () => <App headings={headings} />;

export default Root;
