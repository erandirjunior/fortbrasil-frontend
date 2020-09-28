# fortbrasil-fronted

## Structure folder
<pre>
src
 └── app
   └── infrastructure # Infrastructure layer
     └── boot # Boot files (app initialization code)
     └── builder # Factory to create something
       └── forms # Create forms
         └── FormBulder.js # All form builders should extends this class
     └── components # Helpers and other classes to support application, domain and view layers
     └── i18n # i18n dictionary
     └── store # Vue store to handle vuex
   └── view # View layer
     └── assets # Dynamic assets (processed by webpack)
     └── components # .vue components used in pages & layouts
     └── layouts # Your layouts
     └── pages # Your pages
     └── mixins # Mixins used in .vue files
 └── statics # Pure static assets (directly copied)
 └── css # CSS/Stylus/Sass/... files for your app
 └── router # Vue Router
 </pre>

## Installation

#### Requirements
* [Docker](https://www.docker.com/)
* Disable others services that be running in port 80

***This project run in port 80***

#### Fistly open file quasar.conf.js, go to the line 87 and replace the string YOUR_IP by your IP.

#### After added your ip in the file settings, run this command:
```
docker-compose up
```

### Enter in container with this command:
```
docker exec -it fortbrasilfrontend_frontend_1 sh
```
***In my case the container name was fortbrasilfrontend_frontend_1,
check the container name running this code: docker ps -a***

## Inside the container run this commando to install the dependencies
```bash
npm install
```

### After install dependencies, start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```

### Lint the files
```bash
npm run lint
```

### Build the app for production
```bash
quasar build
```

This system was built using quasar framework, vue validate and axios.
