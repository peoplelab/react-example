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
      placeholder,
    } = this.props;

    const mergedClass = `field ${className}`;

    return (
      <Box className={mergedClass}>
        {!placeholder && (
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
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  placeholder: PropTypes.bool,
};

Field.defaultProps = {
  className: '',
  placeholder: false,
};


export default Field;
