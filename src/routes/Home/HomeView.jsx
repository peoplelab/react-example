import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import Box from '../../components/layout/Box';
import Anchor from '../../components/layout/Anchor';


const HomeComponent = () => (
  <Box>
    <Box>
      Hello world!!
    </Box>
    <Anchor className="anchor" path="/states">
      Go to "states" route
    </Anchor>
    <Anchor className="anchor" path="/redux">
      Go to "redux" route
    </Anchor>
  </Box>
);


// HomeComponent.propTypes = {
// };

// HomeComponent.defaultProps = {
// };


export default HomeComponent;
