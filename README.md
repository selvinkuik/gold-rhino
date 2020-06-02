# gold-rhino

## Prerequisites

  - node 12.7.0
  - yarn 1.22.4
  - vue-cli 4.3.1


## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### Vue Router
See [History Mode](https://router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations).


### Deployment
```
rsync -azP --stats --rsync-path=/home/goldrhin/rsync-HEAD-20200602-0204GMT/bin/rsync dist/* goldrhin@43.243.118.113:public_html
```