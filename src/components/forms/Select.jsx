import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Option from './Option';


class Select extends PureComponent {
  constructor(props) {
    super(props);

    this.mapOptions = this.mapOptions.bind(this);
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
      className,
      name,
      options,
      ...rest
    } = this.props;

    const [value] = this.context;

    const mergedClass = `input input__select ${className}`;

    const Options = options.map(this.mapOptions);

    return (
      <select
        id={name}
        {...rest}
        className={mergedClass}
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
  className: PropTypes.string,
};

Select.defaultProps = {
  className: '',
};


export default Select;
