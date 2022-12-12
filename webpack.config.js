const path = require('path');

module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    alias: {
      '@shared': path.resolve(__dirname, 'sport-app/shared'),
      '@form': path.resolve(__dirname, 'sport-app/form'),
    },
  },
};
