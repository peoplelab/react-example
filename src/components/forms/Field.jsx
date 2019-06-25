/* eslint-disable jsx-a11y/label-has-for */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Enum from '../../tools/Enum';


const FORMATS = Enum.from(
  'CUSTOM',
  'PRIMARY',
  'SECONDARY',
  'SECURITY',
);

const formatToClass = {
  [FORMATS.CUSTOM]: 'field--custom',
  [FORMATS.PRIMARY]: 'field--primary',
  [FORMATS.SECONDARY]: 'field--secondary',
  [FORMATS.SECURITY]: 'field--security',
};

class Field extends PureComponent {
  static formats = FORMATS;

  constructor(props) {
    super(props);

    this.refField = React.createRef();
  }

  getHtmlFor() {
    const { htmlFor } = this.props;

    if (htmlFor === '') {
      const { id } = this.refField.querySelector('input,select');

      return id;
    }

    return htmlFor;
  }

  render() {
    const {
      children,
      isEmpty,
      isValid,
      className,
      errorMessage,
      label,
      type,
      htmlFor: _htmlFor,
      ...rest
    } = this.props;

    let stateClass = formatToClass[type];
    if (!isValid) {
      stateClass += ' field--error';
    }
    if (!isEmpty) {
      stateClass += ' field--edited';
    }

    const mergedClass = `field ${stateClass} ${className}`;

    const htmlFor = this.getHtmlFor();

    const newProps = { className: 'field__input' };
    const element = React.cloneElement(children, newProps);

    return (
      <div className={mergedClass} ref={this.refField} {...rest}>
        <div className="field__box field__box--input">
          {element}
          <label className="field__label" htmlFor={htmlFor}>
            {label}
          </label>
        </div>
        {(!isValid && errorMessage) && (
          <div className="field__box field__box--error-message">
            <p className="field__error-message">
              {errorMessage}
            </p>
          </div>
        )}
      </div>
    );
  }
}


Field.propTypes = {
  children: PropTypes.element,
  isEmpty: PropTypes.bool,
  isValid: PropTypes.bool,
  className: PropTypes.string,
  errorMessage: PropTypes.string,
  htmlFor: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.oneOf(Object.values(FORMATS)),
};

Field.defaultProps = {
  children: null,
  isEmpty: true,
  isValid: true,
  className: '',
  errorMessage: '',
  htmlFor: '',
  label: '',
  type: FORMATS.CUSTOM,
};


export default Field;
