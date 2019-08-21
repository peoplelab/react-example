import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../layouts/Box';


/**
 * Form field
 */
class Field extends PureComponent {
  render() {
    const {
      children,
      className,
      label,
    } = this.props;

    const mergedClass = `field ${className}`;

    return (
      <Box className={mergedClass}>
        {label && (
          <label className="field__label">
            {label}
          </label>
        )}
        {children}
      </Box>
    );
  }
}


Field.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string,
  className: PropTypes.string,
};

Field.defaultProps = {
  className: '',
  label: '',
};


export default Field;
