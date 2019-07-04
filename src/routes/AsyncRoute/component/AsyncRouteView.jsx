import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../../../components/layout/Box';
import Buttons from '../../../components/forms/Button';
import Primary from '../../../template/Primary';


const shapeCoord = {
  lat: PropTypes.number,
  lon: PropTypes.number,
};
const defaultCoord = {
  lat: NaN,
  lon: NaN,
};


class AsyncRouteComponent extends PureComponent {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    event.preventDefault();

    const { getGeolocation } = this.props;

    getGeolocation();
  }

  render() {
    const { coord } = this.props;

    return (
      <Primary>
        <h2 className="primary__route-title">
          Welcome!
        </h2>
        <Box className="primary__route-section home">
          <Box>
            <p className="home__paragraph">
              Hello AsyncRoute!!
            </p>
          </Box>
          <Box>
            <Buttons className="" onClick={this.onClick}>
              Ottieni la tua posizione attuale (onetime click)
            </Buttons>
          </Box>
          <Box>
            <p className="home__paragraph">
              <span>
                <b>Latitudine: </b>
                {coord.lat}
              </span>
              --
              <span>
                <b>Longitudine: </b>
                {coord.lon}
              </span>
            </p>
          </Box>
        </Box>
      </Primary>
    );
  }
}


AsyncRouteComponent.propTypes = {
  coord: PropTypes.shape(shapeCoord),
  getGeolocation: PropTypes.func.isRequired,
};

AsyncRouteComponent.defaultProps = {
  coord: defaultCoord,
};


export default AsyncRouteComponent;
