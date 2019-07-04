import React from 'react';
// import PropTypes from 'prop-types';
import Box from '../../../components/layout/Box';
import Primary from '../../../template/Primary';


const AsyncRouteComponent = () => (
  <Primary>
    <h2 className="primary__route-title">
      Welcome!
    </h2>
    <Box className="primary__route-section home">
      <p className="home__paragraph">
        Hello AsyncRoute!!
      </p>
    </Box>
  </Primary>
);


AsyncRouteComponent.propTypes = {
};

AsyncRouteComponent.defaultProps = {
};


export default AsyncRouteComponent;
