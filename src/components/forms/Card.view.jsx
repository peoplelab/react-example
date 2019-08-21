import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../layouts/Box';
import ButtonForm from './ButtonForm';

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
  render() {
    const {
      gender,
      lastAccess,
      name,
      role,
      className,
    } = this.props;

    const icon = (gender in toIcon && role in toIcon[gender]) ? toIcon[gender][role] : '';

    const mergedClass = `login-card ${className}`;

    return (
      <Box className={mergedClass}>
        <ButtonForm className="login-card__button" name="username" value={name}>
          <Box className="login-card__box">
            <Box className="login-card__picture">
              <img className="login-card__picture-icon" src={icon} alt={roleConverter[role]} />
            </Box>
          </Box>
          <Box className="login-card__box">
            <p className="login-card__paragraph login-card__paragraph--bold">
              {name}
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
  lastAccess: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  gender: PropTypes.oneOf(genderList).isRequired,
  role: PropTypes.oneOf(roleList).isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

Card.defaultProps = {
  className: '',
};


export default Card;
