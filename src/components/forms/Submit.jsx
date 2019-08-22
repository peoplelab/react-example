import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FormContext } from '../../store/components/form.store';


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

    onSubmit({ [name]: value }, newEvent);
  }

  render() {
    const [state] = this.context;

    const {
      children,
      disabled: disabledProp,
      required,
      name,
      ...rest
    } = this.props;

    const disabled = required.reduce((acc, key) => (
      acc || state[key] === undefined || state[key] === null || state[key] === ''
    ), disabledProp);

    return (
      <button
        {...rest}
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
  required: PropTypes.arrayOf(PropTypes.string),
  onSubmit: PropTypes.func.isRequired,
};

Submit.defaultProps = {
  disabled: false,
  required: [],
};


export default Submit;
