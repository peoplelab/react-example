import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FormContext, types } from '../../store/form';


class PasswordInput extends PureComponent {
  static contextType = FormContext;

  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    const { name, value } = event.target;
    const [, dispatch] = this.context;

    dispatch({
      type: types.ON_CHANGE,
      payload: { name, value },
    });
  }

  render() {
    const {
      name,
      className,
      ...rest
    } = this.props;

    const [value] = this.context;

    const mergedClass = `input input__password ${className}`;

    return (
      <input
        className={mergedClass}
        type="password"
        id={name}
        name={name}
        value={value[name]}
        onChange={this.onChange}
        {...rest}
      />
    );
  }
}


PasswordInput.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};

PasswordInput.defaultProps = {
  className: '',
};


export default PasswordInput;
