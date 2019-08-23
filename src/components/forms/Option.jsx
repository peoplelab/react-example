import React, { memo } from 'react';
import PropTypes from 'prop-types';



const Option = (props) => {
  const {
    message,
    value,
  } = props;

  return (
    <option value={value}>
      {message}
    </option>
  );
};


Option.propTypes = {
  message: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

Option.defaultProps = {
};


export default memo(Option);
