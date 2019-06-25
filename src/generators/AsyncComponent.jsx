import React, {Component} from 'react';

const AsyncComponent = (importComponent) => (
  class extends Component {
    constructor(props) {
      super(props);

      this.state = { Component: null };
    }

    componentDidMount() {
      importComponent().then((component) => {
        const Component = component.default;

        this.setState({ Component });
      });
    }

    render() {
      const { Component } = this.state;

      return Component ? <Component {...this.props} /> : null;
    }
  }
);

export default AsyncComponent;