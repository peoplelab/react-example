import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FormContext, types } from '../../store/form';


class TextInput extends PureComponent {
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

    const mergedClass = `input input__text ${className}`;

    return (
      <input
        className={mergedClass}
        type="text"
        id={name}
        name={name}
        value={value[name]}
        onChange={this.onChange}
        {...rest}
      />
    );
  }
}


TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};

TextInput.defaultProps = {
  className: '',
};


export default TextInput;
