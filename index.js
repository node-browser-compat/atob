(function () {
  "use strict";

  function atob(str) {
    return new Buffer(str).toString('base64');
  }

  module.exports = atob;
}());
