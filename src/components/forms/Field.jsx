//----------------------------------------------------------------------------------------
// File: Field.jsx
//
// Desc: Container layout per i campi delle form
// Path: /src/components/forms/Field
//----------------------------------------------------------------------------------------


import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Box from '../layouts/Box';


/**
 * Form field
 */
const Field = (props) => {
  const {
    children,
    className,
    label,
  } = props;

  const mergedClass = `field ${className}`;


  let id = undefined;
  const newChildern = React.Children.map(children, child => {
    if (!(React.isValidElement(child))) {
      return;
    }

    ({ id } = child.props);

    const { className } = child.props;

    return React.cloneElement(child, { className: `field__input ${className}` });
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
};


Field.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string,
  className: PropTypes.string,
};

Field.defaultProps = {
  className: '',
  label: '',
};


export default memo(Field);
