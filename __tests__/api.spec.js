const nx = require('@feizheng/next-js-core2');
require('../src/next-git-log');

describe('api.basic test', () => {
  test('nx.gitLog basic will create a long string', function (done) {
    nx.gitLog({ before: '2020-06-03' }).then(res => {
      expect(typeof res === 'string').toBe(true);
      done();
    });
  });

  test('nx.gitLog with suffix', (done) => {
    nx.gitLog({ suffix: '| grep docs:' }).then(res => {
      expect(res.split('\n').length > 1).toBe(true);
      done();
    });
  })
});
