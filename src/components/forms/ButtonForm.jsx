import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FormContext, types } from '../../store/forms/form.store';


class ButtonForm extends PureComponent {
  static contextType = FormContext;

  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    const { name, value, onClick } = this.props;
    const [, dispatch] = this.context;

    dispatch({
      type: types.ON_CHANGE,
      payload: { [name]: value },
    });

    if (typeof onClick === 'function') {
      onClick(event);
    }
  }

  render() {
    const {
      children,
      className,
      name,
      value: _value, // eslint-disable-line no-unused-vars
      onClick: _onClick, // eslint-disable-line no-unused-vars
      ...rest
    } = this.props;

    const mergedClass = `input input__button ${className}`;

    return name && (
      <button
        {...rest}
        className={mergedClass}
        name={name}
        type="button"
        onClick={this.onClick}
      >
        {children}
      </button>
    );
  }
}


ButtonForm.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  value: PropTypes.any,
  onClick: PropTypes.func,
};

ButtonForm.defaultProps = {
  children: null,
  className: '',
  value: undefined,
  onClick: null,
};


export default ButtonForm;
