/*jshint strict:true node:true es5:true onevar:true laxcomma:true laxbreak:true eqeqeq:true immed:true latedef:true*/
'use strict';

var test = require('tape')
  , atob = require('./')
  ;

test('atob', function(t) {
  t.equal('Hello World', atob('SGVsbG8gV29ybGQ='), 'base64-encodes string');
  t.equal('', atob(''), 'base64-encodes empty string');
  t.end();
});
