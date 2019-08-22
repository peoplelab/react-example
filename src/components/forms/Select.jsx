import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Option from './Option';
import { FormContext, types } from '../../store/forms/form.store';


class Select extends PureComponent {
  static contextType = FormContext;

  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);

    this.mapOptions = this.mapOptions.bind(this);
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

  mapOptions(data) {
    const { value, message } = data;

    return (
      <Option
        value={value}
        message={message}
        key={`option-${value}`}
      />
    );
  }

  render() {
    const {
      name,
      onTest: _onTest, // eslint-disable-line no-unused-vars
      options,
      ...rest
    } = this.props;

    const [value] = this.context;

    const Options = options.map(this.mapOptions);

    return (
      <select
        id={name}
        {...rest}
        name={name}
        value={value[name]}
        onChange={this.onChange}
      >
        {Options}
      </select>
    );
  }
}

const shapeOptions = {
  message: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};


Select.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape(shapeOptions)).isRequired,
  onTest: PropTypes.func,
};

Select.defaultProps = {
  onTest: null,
};


export default Select;
