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
    target,
    className,
    reset,
    onClick,
  } = props;

  if (data === null) {
    return children;
  }

  const mergedClass = `input-card ${className}`;

  return (
    <Box className={mergedClass}>
      <Card
        {...data}
        target={target}
        name={name}
        disabled
        className="input-card__card"
      />
      <ButtonData className="input-card__reset" data={reset} onClick={onClick}>
        <img className="input-card__reset-icon" src={resetIcon} alt="reset" />
      </ButtonData>
    </Box>
  );
};


InputCard.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  target: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.object,
  className: PropTypes.string,
  reset: PropTypes.object,
  onClick: PropTypes.func,
};

InputCard.defaultProps = {
  className: '',
  data: null,
  reset: null,
  onClick: () => {},
};


export default memo(InputCard);
