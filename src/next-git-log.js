(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var tmpl = nx.tmpl || require('@feizheng/next-tmpl');
  var exec = require('child_process').exec;
  var DEFAULT_OPTIONS = {
    pretty: "%s",
    since: '2020-05-01',
    before: '2020-06-01',
  }

  nx.gitLog = function (inOptions) {
    var options = nx.mix(null, DEFAULT_OPTIONS, inOptions);
    var cmds = tmpl('git log --pretty="{pretty}" --since="{since}" --before="{before}"', options);

    return new Promise(function (resolve, reject) {
      exec(cmds, function (error, stdout) {
        if (error) {
          reject(error);
          return;
        }
        resolve(stdout);
      });
    })
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.gitLog;
  }
})();
