'use strict';

// Browser ES6 Polyfill
require('babel/polyfill');

var context = require.context('./../app', true, /\.spec\.jsx$|\.spec\.js$/);
context.keys().forEach(context);
