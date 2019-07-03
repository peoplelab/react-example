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
    message: 'Go to "/states" route',
  },
  {
    path: '/redux',
    message: 'Go to "/redux" route',
  },
  {
    path: '/middleware',
    message: 'Go to "/middleware" route',
  },
  {
    path: '/purejs',
    message: 'Use api with pure JS',
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
