import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Provider } from '../../store/components/form.store';
import Submit from './Submit';


const Form = (props) => {
  const {
    children,
    name,
    className,
    label,
    initial,
    required,
    onSubmit,
    ...rest
  } = props;

  const mergedClass = `form ${className}`;
  const submitClass = `form__submit ${className}-submit`;

  return (
    <Provider initial={initial}>
      <form className={mergedClass} onSubmit={null} name={name} {...rest}>
        {children}
        <Submit className={submitClass} required={required} onSubmit={onSubmit} name={name}>
          {label}
        </Submit>
      </form>
    </Provider>
  );
};

Form.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  label: PropTypes.string,
  initial: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
  required: PropTypes.arrayOf(PropTypes.string),
};

Form.defaultProps = {
  className: '',
  label: '',
  initial: {},
  required: [],
};


export default memo(Form);
