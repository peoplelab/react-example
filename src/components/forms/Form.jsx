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
      initial,
      ...rest
    } = this.props;

    return (
      <Provider initial={initial}>
        <form {...rest} onSubmit={null}>
          {children}
        </form>
      </Provider>
    );
  }
}

Form.propTypes = {
  children: PropTypes.node.isRequired,
  initial: PropTypes.object,
  getContext: PropTypes.func,
};

Form.defaultProps = {
  initial: {},
  getContext: null,
};


export default Form;
