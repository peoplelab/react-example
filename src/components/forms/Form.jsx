import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Provider } from '../../store/components/form.store';


const Form = (props) => {
  const {
    children,
    name,
    className,
    initial,
    ...rest
  } = props;

  const mergedClass = `form ${className}`;

  return (
    <Provider initial={initial}>
      <form className={mergedClass} onSubmit={null} name={name} {...rest}>
        {children}
      </form>
    </Provider>
  );
};

Form.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  initial: PropTypes.object,
};

Form.defaultProps = {
  className: '',
  initial: {},
};


export default memo(Form);
