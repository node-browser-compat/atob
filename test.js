(function () {
  "use strict";

  var atob = require('./index')
    , encoded = "SGVsbG8gV29ybGQ="
    , unencoded = "Hello World"
    , result
    ;

  if (unencoded !== atob(encoded)) {
    return;
  }

  console.log('[PASS] all tests pass');
}());
