import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Enum from '../../tools/Enum';
import { isNil } from '../../utils/checks';


const FORMATS = Enum.from(
  'CUSTOM',
  'ALERT',
  'DESCRIPTION',
  'ERROR',
  'INFO',
  'MESSAGE',
  'WARN',
);

const formatToClass = {
  [FORMATS.CUSTOM]: 'tooltip--custom',
  [FORMATS.ALERT]: 'tooltip--alert',
  [FORMATS.DESCRIPTION]: 'tooltip--description',
  [FORMATS.ERROR]: 'tooltip--error',
  [FORMATS.INFO]: 'tooltip--info',
  [FORMATS.MESSAGE]: 'tooltip--message',
  [FORMATS.WARN]: 'tooltip--warn',
};


class Tooltip extends PureComponent {
  static formats = FORMATS;

  static getDerivedStateFromProps(props, state) {
    if (!isNil(props.show) && state.show !== props.show) {
      return ({
        show: props.show,
      });
    }

    return null;
  }

  constructor(props) {
    super(props);

    const { show } = props;

    this.state = { show };

    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    const {
      onClick,
    } = this.props;

    const {
      show,
    } = this.state;

    if (typeof onClick === 'function') {
      onClick(event);
    }

    this.setState({
      show: !show,
    });
  }

  render() {
    const {
      children,
      content,
      disabled,
      externalAction,
      className,
      type,
    } = this.props;

    const { show } = this.state;

    const mergedClass = `tooltip ${formatToClass[type]} ${className}`;

    const test = (externalAction || !disabled) && show;

    return (
      <div className={mergedClass}>
        {!externalAction && (
          <button
            className="tooltip__button"
            type="button"
            disabled={disabled}
            onClick={this.onClick}
          >
            {content}
          </button>
        )}
        {test && (
          <div className="tooltip__container">
            <div className="tooltip__content">
              {children}
            </div>
          </div>
        )}
      </div>
    );
  }
}


Tooltip.propTypes = {
  children: PropTypes.node,
  content: PropTypes.node,
  disabled: PropTypes.bool,
  externalAction: PropTypes.bool,
  show: PropTypes.bool,
  className: PropTypes.string,
  type: PropTypes.oneOf(Object.values(FORMATS)),
  onClick: PropTypes.func,
};

Tooltip.defaultProps = {
  children: null,
  content: null,
  disabled: false,
  externalAction: false,
  show: undefined,
  className: '',
  type: FORMATS.CUSTOM,
  onClick: null,
};


export default Tooltip;
