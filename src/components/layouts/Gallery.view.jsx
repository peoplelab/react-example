import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// import '../../styles/layouts/Login.style.scss';


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

  makeSlides(acc, objProps, index) {
    const { itemVisible, children } = this.props;
    let { currentIndex } = this.state;

    if (index < this.state.index || index >= (currentIndex + itemVisible)) {
      return acc;
    }

    const newChildern = React.Children.map(children, child =>
      React.cloneElement(child, objProps)
    );

    return [...acc, (
      <div className="gallery__item-slide" key={`slide-${index}`}>
        {newChildern}
      </div>
    )];
  }

  render() {
    const {
      list,
      className,
    } = this.props;

    let { currentIndex } = this.state;

    const mergedClass = `gallery ${className}`;

    const Slides = list.reduce(this.makeSlides, []);

    return (
      <div className={mergedClass}>
        <div className="gallery__box-arrow gallery__box-arrow--prev">
          {currentIndex > 0 && (
            <button className="gallery__button" type="button" onClick={this.onPrev}>
              <img className="gallery__button-icon" src={undefined} alt="prev" />
            </button>
          )}
        </div>
        <div className="gallery__box-slides">
          {Slides}
        </div>
        <div className="gallery__box-arrow gallery__box-arrow--next">
          {currentIndex < list.length - 1 && (
            <button className="gallery__button" type="button" onClick={this.onNext}>
              <img className="gallery__button-icon" src={undefined} alt="next" />
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
