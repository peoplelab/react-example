/* eslint-disable max-len */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';


class Footer extends PureComponent {
  render() {
    const { className } = this.props;

    const mergedClass = `header ${className}`;

    return (
      <header className={mergedClass}>
        <h1 className="header__title">
          React example
        </h1>
      </header>
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
