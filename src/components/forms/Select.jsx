import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Option from './Option';
import { FormContext, types } from '../../store/form';


class Select extends PureComponent {
  static contextType = FormContext;

  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);

    this.mapOptions = this.mapOptions.bind(this);
  }

  onChange(event) {
    const { name, value } = event.target;
    const [, dispatch] = this.context;

    dispatch({
      type: types.ON_CHANGE,
      payload: { name, value },
    });
  }

  mapOptions(data) {
    const { value, message } = data;

    return (<Option value={value} message={message} key={`option-${value}`} />);
  }

  render() {
    const {
      name,
      className,
      options,
      ...rest
    } = this.props;

    const [value] = this.context;

    const mergedClass = `input input__select ${className}`;

    const Options = options.map(this.mapOptions);

    return (
      <select
        className={mergedClass}
        id={name}
        name={name}
        value={value[name]}
        onChange={this.onChange}
        {...rest}
      >
        {Options}
      </select>
    );
  }
}

const shapeOptions = {
  deafult: PropTypes.bool,
  message: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};


Select.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape(shapeOptions)).isRequired,
  className: PropTypes.string,
};

Select.defaultProps = {
  className: '',
};


export default Select;
