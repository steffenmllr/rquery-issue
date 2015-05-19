/* Global vars, used in every test */
'use strict';

var React = require('react/addons');
var _ = require('lodash');

// Having fun with globals
global.expect = require('chai').expect;

// https://github.com/percyhanna/rquery
// To make testing a little bit easier
global.$R = require('rquery')(_, React);

