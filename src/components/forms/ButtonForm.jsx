import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import { FormContext, types } from '../../store/components/form.store';


class ButtonData extends PureComponent {
  static contextType = FormContext;

  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    const { name, value } = this.props;
    const [, dispatch] = this.context;

    dispatch({
      type: types.ON_CHANGE,
      payload: { name, value },
    });
  }

  render() {
    const {
      name,
      value: _value, // eslint-disable-line no-unused-vars
      ...rest
    } = this.props;

    return (
      <Button name={name} onClick={this.onClick} {...rest} />
    );
  }
}


const dataType = [
  PropTypes.bool,
  PropTypes.number,
  PropTypes.string,
];


ButtonData.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType(dataType).isRequired,
};

ButtonData.defaultProps = {
};


export default ButtonData;
