import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Provider, FormContext } from '../../store/forms/form.store';


class Form extends PureComponent {
  static contextType = FormContext;

  constructor(props) {
    super(props);

    this.getContext = this.getContext.bind(this);
  }

  getContext() {
    this.props.getContext(FormContext);
  }

  render() {
    const {
      children,
      className,
      initial,
      getContext: _getContext, // eslint-disable-line no-unused-vars
      ...rest
    } = this.props;

    const mergedClass = `form ${className}`;

    return (
      <Provider initial={initial}>
        <form
          {...rest}
          className={mergedClass}
          onSubmit={null}
        >
          {children}
        </form>
      </Provider>
    );
  }
}

Form.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  initial: PropTypes.object,
  getContext: PropTypes.func,
};

Form.defaultProps = {
  initial: {},
  className: '',
  getContext: null,
};


export default Form;
