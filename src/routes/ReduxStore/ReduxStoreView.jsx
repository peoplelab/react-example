import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Box from '../../components/layout/Box';
import Buttons from '../../components/forms/Button';
import TextInput from '../../components/forms/TextInput';

import '../../style/routes/ReduxStore.scss';

class ReduxStoreComponent extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onToggle = this.onToggle.bind(this);
    this.onCountdown = this.onCountdown.bind(this);
  }

  componentDidMount() {
    setInterval(this.onCountdown, 1200);
  }

  onChange(event) {
    const { value } = event.target;
    const { updateValue } = this.props;

    updateValue(value);
  }

  onToggle() {
    const { visible, setVisibility } = this.props;

    setVisibility(!visible);
  }

  onCountdown() {
    const { visible, changeColor } = this.props;

    if (visible) {
      let color = Math.random() * 4 + 1;
      color = Math.floor(color);

      changeColor(color);
    }
  }

  render() {
    const {
      color,
      value,
      visible,
    } = this.props;

    const mergedClass = `redux-store__message-box redux-store__message-box--color-${color}`;

    return (
      <Box className="redux-store">
        {visible && (
          <Box className="redux-store__value-box">
            <TextInput
              className="redux-store__text-input"
              name="example"
              value={value}
              onChange={this.onChange}
            />
            <Box className={mergedClass}>
              <p className="redux-store__message">
                {`The current value is: ${value}`}
              </p>
            </Box>
          </Box>
        )}
        <Buttons className="redux-store__button" onClick={this.onToggle}>
          Hide input value box
        </Buttons>
      </Box>
    );
  }
}


ReduxStoreComponent.propTypes = {
  color: PropTypes.number.isRequired,
  value: PropTypes.string,
  visible: PropTypes.bool,
  changeColor: PropTypes.func.isRequired,
  updateValue: PropTypes.func.isRequired,
  setVisibility: PropTypes.func.isRequired,
};

ReduxStoreComponent.defaultProps = {
  value: 'Example value',
  visible: true,
};


export default ReduxStoreComponent;
