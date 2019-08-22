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


    let id = undefined;
    const newChildern = React.Children.map(children, child => {
      if (!(React.isValidElement(child))) {
        return;
      }

      ({ id } = child.props);

      return React.cloneElement(child, { className: 'field__input' });
    });


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
