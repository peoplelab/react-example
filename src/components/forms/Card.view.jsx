import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../layouts/Box';
import ButtonForm from './ButtonForm';
import { FormContext, types } from '../../store/components/form.store';

import * as admin from '../../../public/icons/users/icon-admin.svg';
import * as technicalMale from '../../../public/icons/users/icon-technical-male.svg';
import * as technicalFemale from '../../../public/icons/users/icon-technical-female.svg';
import * as operatorMale from '../../../public/icons/users/icon-operator-male.svg';
import * as operatorFemale from '../../../public/icons/users/icon-operator-female.svg';

import '../../styles/forms/Card.style.scss';


const roleList = ['admin', 'super', 'user'];
const genderList = ['male', 'female'];

const toIcon = {
  female: {
    admin: admin,
    super: technicalFemale,
    user: operatorFemale,
  },
  male: {
    admin: admin,
    super: technicalMale,
    user: operatorMale,
  },
};

const roleConverter = {
  admin: 'Administrator',
  super: 'Technician',
  user: 'Operator',
};


class Card extends PureComponent {
  static contextType = FormContext;

  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    const {
      group,
      gender,
      lastAccess,
      username,
      role
    } = this.props;
    const [, dispatch] = this.context;

    const value = {
      gender,
      lastAccess,
      username,
      role,
    };

    dispatch({
      type: types.ON_CHANGE,
      payload: {
        name: group,
        value,
      },
    });
  }

  render() {
    const {
      gender,
      lastAccess,
      name,
      username,
      role,
      className,
      disabled,
    } = this.props;

    const icon = (gender in toIcon && role in toIcon[gender]) ? toIcon[gender][role] : '';

    const mergedClass = `login-card ${className}`;

    return (
      lastAccess
      && name
      && username
      && gender
      && role
    ) && (
      <Box className={mergedClass}>
        <ButtonForm className="login-card__button" name={name} value={username} disabled={disabled} onClick={this.onClick}>
          <Box className="login-card__box">
            <Box className="login-card__picture">
              <img className="login-card__picture-icon" src={icon} alt={roleConverter[role]} />
            </Box>
          </Box>
          <Box className="login-card__box">
            <p className="login-card__paragraph login-card__paragraph--bold">
              {username}
            </p>
            <p className="login-card__paragraph login-card__paragraph--semibold">
              {roleConverter[role]}
            </p>
          </Box>
          <Box className="login-card__box">
            <p className="login-card__paragraph login-card__paragraph--light">
              Last access:
            </p>
            <p className="login-card__paragraph login-card__paragraph--normal">
              {lastAccess}
            </p>
          </Box>
        </ButtonForm>
      </Box>
    );
  }
}


Card.propTypes = {
  lastAccess: PropTypes.string,
  name: PropTypes.string,
  group: PropTypes.string,
  username: PropTypes.string,
  gender: PropTypes.oneOf(genderList),
  role: PropTypes.oneOf(roleList),
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

Card.defaultProps = {
  lastAccess: '',
  name: '',
  group: '',
  username: '',
  gender: undefined,
  role: undefined,
  className: '',
  disabled: false,
};


export default Card;
