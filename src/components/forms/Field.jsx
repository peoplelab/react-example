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

    const [child] = children;

    let id = undefined;
    if (React.isValidElement(child)) {
      ({ id } = child.props);
    }

    const newChildern = React.cloneElement(child, { className: 'field__input' });

    return (
      <Box className={mergedClass}>
        {label && (
          <label className="field__label" htmlFor={id}>
            {label}
          </label>
        )}
        {newChildern}
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
