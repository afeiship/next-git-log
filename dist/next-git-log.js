/*!
 * name: @alo7i/next-git-log
 * description: Git logs.
 * homepage: https://github.com/afeiship/next-git-log
 * version: 1.0.0
 * date: 2020-06-03T08:52:03.927Z
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var tmpl = nx.tmpl || require('@feizheng/next-tmpl');
  var exec = require('child_process').exec;
  var today = new Date().toISOString().slice(0, 10);
  var DEFAULT_OPTIONS = {
    pretty: "%h - %s",
    since: '2020-05-01',
    before: today,
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

//# sourceMappingURL=next-git-log.js.map
