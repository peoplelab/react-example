import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../../components/layout/Box';
import Header from '../../components/template/Header';
import Footer from '../../components/template/Footer';
import Navigation from '../../components/template/Navigation';

import '../../style/template/Primary.scss';


class PrimaryComponent extends PureComponent {
  render() {
    const { children } = this.props;

    return (
      <Box className="primary">
        <Header className="primary__header">
          Hello world!!
        </Header>
        <Box className="primary__container">
          <Navigation className="primary__navigation">
            Hello world!!
          </Navigation>
          <Box className="primary__route">
            {children}
          </Box>
        </Box>
        <Footer className="primary__footer">
          Hello world!!
        </Footer>
      </Box>
    );
  }
}


PrimaryComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

PrimaryComponent.defaultProps = {
};


export default PrimaryComponent;
