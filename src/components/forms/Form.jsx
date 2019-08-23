import React, { memo } from 'react';
import PropTypes from 'prop-types';


const Form = (props) => {
  const {
    children,
    className,
    ...rest
  } = props;

  const mergedClass = `form ${className}`;

  return (
    <form
      {...rest}
      className={mergedClass}
      onSubmit={null}
    >
      {children}
    </form>
  );
};

Form.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Form.defaultProps = {
  className: '',
};


export default memo(Form);
