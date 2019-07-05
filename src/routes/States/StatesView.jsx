import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Box from '../../components/layout/Box';
import Buttons from '../../components/forms/Button';
import TextInput from '../../components/forms/TextInput';
import Primary from '../../template/Primary';

import '../../style/routes/States.scss';

class StatesComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: 1,
      value: '',
      visible: true,
    };

    this.onChange = this.onChange.bind(this);
    this.onToggle = this.onToggle.bind(this);
    this.onCountdown = this.onCountdown.bind(this);
  }

  componentDidMount() {
    setInterval(this.onCountdown, 1200);
  }

  onChange(event) {
    const { value } = event.target;

    this.setState({ value });
  }

  onToggle() {
    const { visible } = this.state;

    this.setState({ visible: !visible });
  }

  onCountdown() {
    const { visible } = this.state;

    if (visible) {
      let color = Math.random() * 4 + 1;
      color = Math.floor(color);

      this.setState({ color });
    }
  }


	// Commento

  render() {
    const {
      color,
      value,
      visible,
    } = this.state;

    const mergedClass = `states__message-box states__message-box--color-${color}`;

    return (
      <Primary>
        <h2 className="primary__route-title">
          States
        </h2>
        <Box className="primary__route-section states">
          <Buttons className="states__button" onClick={this.onToggle}>
            Hide input value box
          </Buttons>
          {visible && (
            <Box className="states__value-box">
              <TextInput
                className="states__text-input"
                name="example"
                value={value}
                onChange={this.onChange}
              />
              <Box className={mergedClass}>
                <p className="states__message">
                  {`The current value is: ${value}`}
                </p>
              </Box>
            </Box>
          )}
        </Box>
      </Primary>
    );
  }
}


StatesComponent.propTypes = {
};

StatesComponent.defaultProps = {
};


export default StatesComponent;
