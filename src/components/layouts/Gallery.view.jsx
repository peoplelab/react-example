import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import * as prevArrow from '../../../public/icons/arrow/icon-prev.svg';
import * as nextArrow from '../../../public/icons/arrow/icon-next.svg';

import '../../styles/layouts/Gallery.style.scss';


class Gallery extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentIndex: 0,
    };

    this.onPrev = this.onPrev.bind(this);
    this.onNext = this.onNext.bind(this);
    this.makeSlides = this.makeSlides.bind(this);
  }

  onPrev() {
    const { itemVisible } = this.props;
    let { currentIndex } = this.state;

    if (currentIndex <= 0) {
      return;
    }

    currentIndex -= itemVisible;

    this.setState({ currentIndex });
  }

  onNext() {
    const { list, itemVisible } = this.props;
    let { currentIndex } = this.state;

    if (currentIndex >= list.length - 1) {
      return;
    }

    currentIndex += itemVisible;

    this.setState({ currentIndex });
  }

  makeSlides(objProps, index) {
    const { children } = this.props;

    const newChildern = React.Children.map(children, child =>
      React.cloneElement(child, objProps)
    );

    return (
      <div className="gallery__item-slide" key={`slide-${index}`}>
        {newChildern}
      </div>
    );
  }

  render() {
    const {
      list,
      itemVisible,
      className,
    } = this.props;

    let { currentIndex } = this.state;

    const mergedClass = `gallery ${className}`;

    const Slides = list.map(this.makeSlides);

    const left = (100 / list.length) * currentIndex * itemVisible;
    const style = { left: `-${left}%` };

    return (
      <div className={mergedClass}>
        <div className="gallery__box-arrow gallery__box-arrow--prev">
          {currentIndex > 0 && (
            <button className="gallery__button" type="button" onClick={this.onPrev}>
              <img className="gallery__button-icon" src={prevArrow} alt="prev" />
            </button>
          )}
        </div>
        <div className="gallery__box-slides">
          <div className="gallery__slides-tape" style={style}>
            {Slides}
          </div>
        </div>
        <div className="gallery__box-arrow gallery__box-arrow--next">
          {(currentIndex + itemVisible) < list.length && (
            <button className="gallery__button" type="button" onClick={this.onNext}>
              <img className="gallery__button-icon" src={nextArrow} alt="next" />
            </button>
          )}
        </div>
      </div>
    );
  }
}


Gallery.propTypes = {
  children: PropTypes.node.isRequired,
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  className: PropTypes.string,
  itemVisible: PropTypes.number,
};

Gallery.defaultProps = {
  className: '',
  itemVisible: 3,
};


export default Gallery;
