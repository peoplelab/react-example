/* eslint-disable max-len */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';


class Footer extends PureComponent {
  render() {
    const { className } = this.props;

    const mergedClass = `footer ${className}`;

    return (
      <footer className={mergedClass}>
        <p className="footer__message">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum, elit ac vehicula maximus, est dolor porta nulla, vitae auctor ipsum felis non enim. Nulla ullamcorper imperdiet faucibus. Sed rhoncus laoreet mattis. Praesent dapibus porta massa. Donec ipsum lectus, gravida quis dignissim sit amet, facilisis id tortor. Vestibulum euismod mi ipsum, nec consectetur risus commodo at. Suspendisse tortor leo, dignissim at lacus vitae, vulputate mattis nisi. Etiam suscipit lacinia auctor. Sed eu nulla at elit elementum ultrices.

          Phasellus fringilla felis vel blandit commodo. Aenean nulla mauris, laoreet id bibendum id, faucibus eget nunc. Sed at commodo ligula. Nullam vitae rutrum diam, in tincidunt tellus. Nulla luctus egestas blandit. Sed non lorem a nisl imperdiet sollicitudin id in est. Donec semper tortor at sapien malesuada tincidunt ut et enim.
        </p>
      </footer>
    );
  }
}


Footer.propTypes = {
  className: PropTypes.string,
};

Footer.defaultProps = {
  className: '',
};


export default Footer;
