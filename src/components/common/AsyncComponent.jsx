//----------------------------------------------------------------------------------------
// File: AsyncComponent.jsx
//
// Desc: Componente React per il caricamento asincrono dei componenti della view
// Path: /src/components/common/AsyncComponent
//----------------------------------------------------------------------------------------


import React, { Component as ReactComponent } from 'react';


let IS_MOUNTED = false;

// Recupera il componente React da caricare in modo asincrono
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

      // Previene l'uso di setState negli unmunted component
      this.mounted = AsyncComponent.mountedComponent;

      // Carica il componente React appena è disponibile
      this.state = { Component: null };
    }

    componentDidMount() {
      // Avverte la promise che il AsyncComponent è stato caricato completamente
      this.mounted = true;

      // Recupera, in modo asincrono, il componente React da caricare
      importComponent().then((component) => {
        if (!(this.mounted) ){
          return;
        }

        let Component = component.default || component.Provider;

        // Aggiorna lo stato solo quando AsyncComponent è stato completamente caricato completamente
        this.setState({ Component });
      });
    }

    componentWillUnmount() {
      // Avverte la promise che il AsyncComponent non esiste più
      this.mounted = false;
    }

    // Appena possibile, renderizza il componente asincrono
    render() {
      let { Component } = this.state;

      return Component && <Component {...this.props} />;
    }
  }
);

export default AsyncComponent;
