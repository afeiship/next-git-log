/*!
 * name: @jswork/next-git-log
 * description: Git logs.
 * homepage: https://github.com/afeiship/next-git-log
 * version: 1.0.0
 * date: 2020-11-21 09:31:04
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var tmpl = nx.tmpl || require('@jswork/next-tmpl');
  var exec = require('child_process').exec;
  var execSync = require('child_process').execSync;
  var today = new Date().toISOString().slice(0, 10);
  var DEFAULT_OPTIONS = {
    pretty: '%h - %s',
    since: '2020-05-01',
    before: today,
    suffix: '',
    async: true,
    debug: false
  };

  nx.gitLog = function (inOptions) {
    var options = nx.mix(null, DEFAULT_OPTIONS, inOptions);
    var templates = [
      'git log',
      options.pretty && '--pretty="{pretty}"',
      options.since && '--since="{since}"',
      options.before && '--before="{before}"',
      options.suffix && '{suffix}'
    ]
      .filter(Boolean)
      .join(' ');

    var cmds = tmpl(templates, options);

    options.debug && console.log('[ debug ]: ', cmds);

    if (options.async) {
      return new Promise(function (resolve, reject) {
        exec(cmds, function (error, stdout) {
          if (error) return reject(error);
          resolve(stdout.trim());
        });
      });
    }

    return execSync(cmds).toString().trim();
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.gitLog;
  }
})();
