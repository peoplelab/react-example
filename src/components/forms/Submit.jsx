import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FormContext } from '../../store/forms/form.store';


class Submit extends PureComponent {
  static contextType = FormContext;

  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    const [value] = this.context;

    const { onSubmit, name } = this.props;

    const newEvent = {
      ...event,
      target: {
        ...event.target,
        name,
        value,
      }
    };

    onSubmit(value, newEvent);
  }

  render() {
    const [state] = this.context;

    const {
      children,
      className,
      disabled: disabledProp,
      required,
      name,
      ...rest
    } = this.props;

    const mergedClass = `input input__submit ${className}`;

    const disabled = required.reduce((acc, key) => (
      acc || state[key] === undefined || state[key] === null || state[key] === ''
    ), disabledProp);

    return (
      <button
        {...rest}
        className={mergedClass}
        type="button"
        name={name}
        disabled={disabled}
        onClick={this.onSubmit}
        >
        {children}
      </button>
    );
  }
}

Submit.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  required: PropTypes.arrayOf(PropTypes.string),
  onSubmit: PropTypes.func.isRequired,
};

Submit.defaultProps = {
  disabled: false,
  className: '',
  required: [],
};


export default Submit;
