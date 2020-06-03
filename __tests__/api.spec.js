const nx = require('@feizheng/next-js-core2');
require('../src/next-git-log');

describe('api.basic test', () => {
  test('nx.gitLog', function (done) {
    nx.gitLog({ before: '2020-06-03' }).then(res => {
      console.log(res);
      done();
    });
  });
});
