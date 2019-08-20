import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// import '../../styles/layouts/Login.style.scss';


class Gallery extends PureComponent {
  constructor(props) {
    super(props);

  //   this.onPrev = this.onPrev.bind(this);
  //   this.onNext = this.onNext.bind(this);
    this.makeSlides = this.makeSlides.bind(this);
  }

  makeSlides(objProps, index) {
    const { children } = this.props;
    console.log('objProps', objProps);
    console.log('children', children);
    const newChildern = React.Children.map(children, child =>
      React.cloneElement(child, objProps)
    );

    console.log('newChildern', newChildern);
    return (
      <div className="gallery__item-slide" key={`slide-${index}`}>
        {newChildern}
      </div>
    );
  }

  render() {
    const {
      list,
      // children,
      className,
    } = this.props;

    const mergedClass = `gallery ${className}`;

    const Slides = list.map(this.makeSlides);

    return (
      <div className={mergedClass}>
        <div className="gallery__box-arrow gallery__box-arrow--prev">
          <button className="gallery__button" type="button" onClick={this.onPrev}>
            <img className="gallery__button-icon" src={undefined} alt="prev" />
          </button>
        </div>
        <div className="gallery__box-slides">
          {Slides}
        </div>
        <div className="gallery__box-arrow gallery__box-arrow--next">
          <button className="gallery__button" type="button" onClick={this.onNext}>
            <img className="gallery__button-icon" src={undefined} alt="next" />
          </button>
        </div>
      </div>
    );
  }
}


Gallery.propTypes = {
  children: PropTypes.node.isRequired,
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  className: PropTypes.string,
};

Gallery.defaultProps = {
  className: '',
};


export default Gallery;
