System.config({
  map: {
    'angular': 'npm:angular',
    'app': 'app',
  },
  packages: {
    'angular': {
      main: './index.js',
      defaultExtension: 'js',
    },
    'app': {
      defaultExtension: 'js',
    }
  },
  paths: {
    'npm:': 'node_modules/'
  },
});
