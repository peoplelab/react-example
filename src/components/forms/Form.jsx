import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';


const typeChildren = [
  PropTypes.arrayOf(PropTypes.element),
  PropTypes.element,
];


class Form extends PureComponent {
  render() {
    const {
      children,
      className,
      error,
      valid,
      ...rest
    } = this.props;

    let stateClass = '';
    if (error) {
      stateClass = 'form--error';
    } else if (valid) {
      stateClass = 'form--valid';
    }

    const mergedClass = `form ${stateClass} ${className}`;

    const newProps = { className: 'form__field' };
    const elements = React.cloneElement(children, newProps);

    return (
      <form className={mergedClass} {...rest}>
        {elements}
      </form>
    );
  }
}


Form.propTypes = {
  children: PropTypes.oneOfType(typeChildren).isRequired,
  className: PropTypes.string,
  error: PropTypes.bool,
  valid: PropTypes.bool,
};

Form.defaultProps = {
  className: '',
  error: false,
  valid: false,
};


export default Form;
