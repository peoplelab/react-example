import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FormContext, types } from '../../store/forms/form.store';


class PasswordInput extends PureComponent {
  static contextType = FormContext;

  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    const { onTest } = this.props;

    let test = true;
    if (typeof onTest === 'function') {
      test = onTest(event);
    }

    if (test) {
      const { name, value } = event.target;
      const [, dispatch] = this.context;

      dispatch({
        type: types.ON_CHANGE,
        payload: { [name]: value },
      });
    }
  }

  render() {
    const {
      name,
      onTest: _onTest, // eslint-disable-line no-unused-vars
      ...rest
    } = this.props;

    const [value] = this.context;

    return (
      <input
        id={name}
        {...rest}
        type="password"
        name={name}
        value={value[name]}
        onChange={this.onChange}
      />
    );
  }
}


PasswordInput.propTypes = {
  name: PropTypes.string.isRequired,
  onTest: PropTypes.func,
};

PasswordInput.defaultProps = {
  onTest: null,
};


export default PasswordInput;
