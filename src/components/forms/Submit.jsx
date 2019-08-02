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

    onSubmit(newEvent);
  }

  render() {
    const [state] = this.context;

    const {
      children,
      className,
      required,
      name: _name, // eslint-disable-line no-unused-vars
      ...rest
    } = this.props;

    const mergedClass = `submit ${className}`;

    const disabled = required.reduce((acc, key) => (
      acc
      || state[key] === undefined
      || state[key] === null
      || state[key] === ''
    ), false);

    return (
      <button
        type="button"
        className={mergedClass}
        disabled={disabled}
        onClick={this.onSubmit}
        {...rest}
        >
        {children}
      </button>
    );
  }
}

Submit.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  required: PropTypes.arrayOf(PropTypes.string),
  onSubmit: PropTypes.func.isRequired,
};

Submit.defaultProps = {
  className: '',
  required: [],
};


export default Submit;
