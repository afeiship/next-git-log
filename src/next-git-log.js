(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var execSync = require('child_process').execSync;

  nx.gitLog = function () {
    //code goes here.
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.gitLog;
  }
})();
