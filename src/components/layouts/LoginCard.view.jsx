import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import * as admin from '../../../public/icons/users/icon-admin.svg';
import * as technicalMale from '../../../public/icons/users/icon-technical-male.svg';
import * as technicalFemale from '../../../public/icons/users/icon-technical-female.svg';
import * as operatorMale from '../../../public/icons/users/icon-operator-male.svg';
import * as operatorFemale from '../../../public/icons/users/icon-operator-female.svg';

import '../../styles/layouts/Login.style.scss';


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


class LoginCard extends PureComponent {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    const { onClick, name } = this.props;

    const newEvent = {
      ...event,
      target: {
        ...event.target,
        value: name
      }
    };

    onClick(newEvent);
  }

  render() {
    const {
      gender,
      lastAccess,
      name,
      role,
      className,
    } = this.props;

    const icon = toIcon[gender][role];

    const mergedClass = `login-card ${className}`;

    return (
      <div className={mergedClass}>
        <button className="login-card__button" type="button" onClick={this.onClick}>
          <div className="login-card__box">
            <div className="login-card__picture">
              <img className="login-card__picture-icon" src={icon} alt={roleConverter[role]} />
            </div>
          </div>
          <div className="login-card__box">
            <p className="login-card__paragraph login-card__paragraph--bold">
              {name}
            </p>
            <p className="login-card__paragraph login-card__paragraph--semibold">
              {roleConverter[role]}
            </p>
          </div>
          <div className="login-card__box">
            <p className="login-card__paragraph login-card__paragraph--light">
              Last access:
            </p>
            <p className="login-card__paragraph login-card__paragraph--normal">
              {lastAccess}
            </p>
          </div>
        </button>
      </div>
    );
  }
}


LoginCard.propTypes = {
  lastAccess: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  gender: PropTypes.oneOf(genderList).isRequired,
  role: PropTypes.oneOf(roleList).isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

LoginCard.defaultProps = {
  className: '',
};


export default LoginCard;
