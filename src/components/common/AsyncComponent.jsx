import React, { Component as ReactComponent } from 'react';


let IS_MOUNTED = false;

/**
 * Handle asynchronous loading of React components
 *
 * Note: if required, it sends Redux store to component
 * @param {React} importComponent React async component
 */
const AsyncComponent = importComponent => (
  class extends ReactComponent {
    static get mountedComponent() {
      return IS_MOUNTED;
    }
    static set mountedComponent(value) {
      if (IS_MOUNTED !== value) {
        IS_MOUNTED = value;
      }
    }

    constructor(props) {
      super(props);

      /**
       * Prevent setState on unmounted compoent
       */
      this.mounted = AsyncComponent.mountedComponent;

      /**
       * Load component when ready
       */
      this.state = { Component: null };
    }

    componentDidMount() {
      this.mounted = true;
      /**
       * Retrive asynchronous the async component to render
       */
      importComponent().then((component) => {
        if (!(this.mounted) ){
          return;
        }

        let Component = component.default || component.Provider;

        /**
         * Update the React component handler only when the async component is loaded
         */
        this.setState({ Component });
      });
    }

    componentWillUnmount() {
      this.mounted = false;
    }

    /**
     * Render the async component only when is stored into this.state
     */
    render() {
      let { Component } = this.state;

      return Component ? <Component {...this.props} /> : null;
    }
  }
);

export default AsyncComponent;
