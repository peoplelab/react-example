import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Box from '../layouts/Box';
import ButtonData from '../layouts/ButtonData';
import Card from './Card.view';

import * as resetIcon from '../../../public/icons/icon-close.svg';

import '../../styles/forms/InputCard.style.scss';


const InputCard = (props) => {
  const {
    data,
    children,
    name,
    group,
    className,
    onClick,
  } = props;

  if (data === null) {
    return children;
  }

  const dataReset = {
    [name]: '',
    [group]: null,
  };

  const mergedClass = `input-card ${className}`;

  return (
    <Box className={mergedClass}>
      <Card
        {...data}
        name={name}
        disabled
        className="input-card__card"
      />
      <ButtonData className="input-card__reset" data={dataReset} onClick={onClick}>
        <img className="input-card__reset-icon" src={resetIcon} alt="reset" />
      </ButtonData>
    </Box>
  );
};


InputCard.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  group: PropTypes.string.isRequired,
  data: PropTypes.object,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

InputCard.defaultProps = {
  className: '',
  data: null,
  onClick: () => {},
};


export default memo(InputCard);
