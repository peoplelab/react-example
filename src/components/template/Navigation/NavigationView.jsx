/* eslint-disable max-len */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../../layout/Box';
import Anchor from '../../layout/Anchor';


const LINKS = [
  {
    path: '/',
    message: 'Home',
  },
  {
    path: '/states',
    message: 'Test React states',
  },
  {
    path: '/redux',
    message: 'Test redux store',
  },
  {
    path: '/middleware',
    message: 'Use api with redux middleware',
  },
  {
    path: '/sagas',
    message: 'Use api with sagas',
  },
  {
    path: '/purejs',
    message: 'Use api with pure JS',
  },
  {
    path: '/asyncroute',
    message: 'Test a full async route',
  },
];


const mapLinks = (data, index) => {
  const { path, message } = data;

  return (
    <li className="navigation__list-item" key={`navigation-list-item-${index}`}>
      <Anchor className="anchor" path={path}>
        {message}
      </Anchor>
    </li>
  );
};


class Footer extends PureComponent {
  render() {
    const { className } = this.props;

    const mergedClass = `navigation ${className}`;

    const List = LINKS.map(mapLinks);

    return (
      <Box className={mergedClass}>
        <ul className="navigation__list">
          {List}
        </ul>
      </Box>
    );
  }
}


Footer.propTypes = {
  className: PropTypes.string,
};

Footer.defaultProps = {
  className: '',
};


export default Footer;
