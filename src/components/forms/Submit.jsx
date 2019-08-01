import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { useForm } from '../../store/form';


const Submit = (props) => {
  const [state] = useForm();

  const {
    children,
    className,
    required,
    ...rest
  } = props;

  const mergedClass = `submit ${className}`;

  const disabled = required.reduce((acc, key) => (
    acc
    || state[key] === undefined
    || state[key] === null
    || state[key] === ''
  ), false);

  return (
    <button type="submit" className={mergedClass} disabled={disabled} {...rest}>
      {children}
    </button>
  );
};

Submit.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  required: PropTypes.arrayOf(PropTypes.string),
};

Submit.defaultProps = {
  className: '',
  required: [],
};


export default memo(Submit);
