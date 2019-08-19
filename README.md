
# Mitrol



## Folders
Alberatura del progetto

### config
Contiene i file per la configurazione globale del progetto per eseguire sviluppo e rilasci

### mocks
Contiene le response di esempio delle api per i test in ambiente locale

### public
Contiene le risorse statiche del progetto

Es:
* favicon.ico
* index.html

### server
Contine i server per l'esecuzione e di test del progetto; i server saranno eseguiti su localhost, ognuno rispettivamente alla porta indicata

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
° [category]
  ° ?[folder]
    ° ?[name]
      ° [name].[category].[js|jsx]
```

oppure \*
``` plain/text
° components
  ° ?[folder]
    ° [name]
      ° [name].view.jsx
      ° [name].item.[item-name].jsx
```

\*: solo per il codice relativo alla view dei componenti React

\*\*: '?' indica un passaggio non obbligatorio


Es:
``` plain/text
° components
  ° routes
    ° login
      ° login.view.jsx
° controllers
  ° routes
    ° login
      ° login.controller.js
° modules
  ° routes
    ° login
      ° login.module.js
° presenters
  ° routes
    ° login
      ° login.presenter.js
° styles
  ° routes
    ° login
      ° login.style.scss
```
