import React from 'react';
// import PropTypes from 'prop-types';
import Box from '../../components/layout/Box';
import Primary from '../../template/Primary';


const HomeComponent = () => (
  <Primary>
    <h2 className="primary__route-title">
      Welcome!
    </h2>
    <Box className="primary__route-section home">
      <p className="home__paragraph">
        Hello world!!
      </p>
    </Box>
  </Primary>
);


HomeComponent.propTypes = {
};

HomeComponent.defaultProps = {
};


export default HomeComponent;
