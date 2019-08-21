import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FormContext, types } from '../../store/components/form.store';
import Box from '../layouts/Box';
import ButtonForm from './ButtonForm';
import TextInput from './TextInput';
import Card from './Card.view';

import * as resetIcon from '../../../public/icons/icon-close.svg';


class ButtonData extends PureComponent {
  static contextType = FormContext;

  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    const { group } = this.props;
    const [, dispatch] = this.context;

    dispatch({
      type: types.ON_CHANGE,
      payload: {
        name: group,
        value: null
      },
    });
  }
  render() {
    const {
      name,
      group,
      className,
      ...rest
    } = this.props;

    const [value] = this.context;
    const data = value[group];

    if (!data) {
      return <TextInput name={name} className={className} {...rest} />;
    }

    return (
      <Box className="input-card">
        <Card
          {...data}
          name={name}
          disabled
          className="input-card__card"
        />
        <ButtonForm className="input-card__reset" name={name} value="" onClick={this.onClick}>
          <img className="input-card__reset-icon" src={resetIcon} alt="reset" />
        </ButtonForm>
      </Box>
    );
  }
}


ButtonData.propTypes = {
  name: PropTypes.string.isRequired,
  group: PropTypes.string.isRequired,
  className: PropTypes.string,
};

ButtonData.defaultProps = {
  className: '',
};


export default ButtonData;
