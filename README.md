
# Mitrol



## Folders
Alberatura del progetto

### config
Contiene i file per la configurazione globale del progetto per eseguire sviluppo e rilasci

### public
Contiene le risorse statiche del progetto

Es:
* favicon.ico
* index.html

### server
Contine i server per l'eseguzione e i test del progetto; i server saranno eseguiti su localhost alla rispettiva porta indicata

### src
Contiene le risorse del progetto

#### src/index.js
Entry point dell'applicativo

#### src/components
Contiene i file view dei componenti React

#### src/containers
Contiene i file per la gestione dell'applicativo

##### src/containers/App
Gestisce i componenti di configurazione del progetto

##### src/containers/Main
Gestisce le route da visualizzare e la loro accessibilità da parte dell'utente

##### src/containers/Router
Gestisce il recupero asincrono delle route da fornire nel Main

#### src/controllers
Contiene i file controller dei componenti React

#### src/models
Contiene i file model dei componenti React

#### src/presenters
Contiene i file presenter dei componenti React

#### src/styles
Contiene i file di stile dei componenti React


## Files organization
Fatta eccezione per src/controllers, tutte le directory in src, presentano la stessa alberatura, di seguito riportata
``` plain/text
° [main-folder]
  ° [folder]
    ° [name].[category].[js|jsx]
```

oppure \*
``` plain/text
° [main-folder]
  ° [folder]
    ° [name]
      ° [name].[category].[jsx]
      ° [name].item.[item-name].[jsx]
```

\* (solo per la view dei componenti React)


Es:
``` plain/text
° components
  ° routes
    ° Login.view.jsx
° controllers
  ° routes
    ° Login.controller.js
° modules
  ° routes
    ° Login.module.js
° presenters
  ° routes
    ° Login.presenter.js
° styles
  ° routes
    ° Login.style.scss
```
