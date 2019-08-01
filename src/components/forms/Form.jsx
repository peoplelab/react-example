import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FormProvider } from '../../store/form';
import Submit from './Submit';


class Form extends PureComponent {
  constructor(props) {
    super(props);

    this.onSubmit= this.onSubmit.bind(this);
  }

  render() {
    const {
      children,
      className,
      label,
      initial,
      required,
      onSubmit,
      ...rest
    } = this.props;

    const mergedClass = `form ${className}`;
    const submitClass = `form__submit ${className}-submit`;

    return (
      <FormProvider initial={initial}>
        <form className={mergedClass} {...rest}>
          {children}
          <Submit className={submitClass} required={required} onSubmit={onSubmit}>
            {label}
          </Submit>
        </form>
      </FormProvider>
    );
  }
}

Form.propTypes = {
  children: PropTypes.node.isRequired,
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


export default Form;
