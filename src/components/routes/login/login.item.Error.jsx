import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../../layouts/Box/Box.index';


/**
 * Login Error banner
 *
 * Note: item own of Login route
 */
class ErrorItem extends PureComponent {
  render() {
    const {
      show,
    } = this.props;

    return show && (
      <Box className="login__error">
        <Box className="login__error-alert">
          <p className="login__error-message">
            Something went wrong on login
          </p>
        </Box>
      </Box>
    );
  }
}


ErrorItem.propTypes = {
  show: PropTypes.bool,
};

ErrorItem.defaultProps = {
  show: false,
};


export default ErrorItem;
