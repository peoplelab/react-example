import React from 'react';
// import PropTypes from 'prop-types';
import Box from '../../components/layout/Box';
import Anchor from '../../components/layout/Anchor';


const HomeComponent = () => (
  <Box>
    <Box>
      Hello world!!
    </Box>
    <Anchor className="anchor" path="/states">
      {// eslint-disable-next-line react/no-unescaped-entities, react/jsx-one-expression-per-line
      }Go to "/states" route
    </Anchor>
    <Anchor className="anchor" path="/redux">
      {// eslint-disable-next-line react/no-unescaped-entities, react/jsx-one-expression-per-line
      }Go to "/redux" route
    </Anchor>
    <Anchor className="anchor" path="/middleware">
      {// eslint-disable-next-line react/no-unescaped-entities, react/jsx-one-expression-per-line
      }Go to "/middleware" route
    </Anchor>
  </Box>
);


// HomeComponent.propTypes = {
// };

// HomeComponent.defaultProps = {
// };


export default HomeComponent;
