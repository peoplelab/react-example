import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FormContext, types } from '../../store/components/form.store';


class RadioButton extends PureComponent {
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
      checked,
      onTest: _onTest, // eslint-disable-line no-unused-vars
      ...rest
    } = this.props;

    const [value] = this.context;

    return (
      <input
        id={name}
        {...rest}
        type="text"
        name={name}
        value={value[name]}
        checked={checked}
        onChange={this.onChange}
      />
    );
  }
}


RadioButton.propTypes = {
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onTest: PropTypes.func,
};

RadioButton.defaultProps = {
  checked: false,
  onTest: null,
};


export default RadioButton;
