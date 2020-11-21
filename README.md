# next-git-log
> Git logs.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-git-log
```

## apis
| api    | type    | default    | description                 |
| ------ | ------- | ---------- | --------------------------- |
| pretty | string  | %h - %s    | git log `pretty`            |
| since  | string  | 2020-05-01 | git log `since`             |
| before | string  | TODAY      | git log `before`            |
| suffix | string  | ''         | git log - ... `suffix`      |
| debug  | boolean | false      | Output the shell scripts    |
| async  | boolean | true       | ExecSync/exec the shell cmd |

## usage
```js
import '@jswork/next-git-log';

nx.gitLog({ since: '2020-06-01' }).then(res => {
  console.log(res);
});

// c1b0ca1 - docs: initail
// 6f6380f - refactor: use tmpl for template
// 5b51e88 - feat: initail
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-git-log/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-git-log
[version-url]: https://npmjs.org/package/@jswork/next-git-log

[license-image]: https://img.shields.io/npm/l/@jswork/next-git-log
[license-url]: https://github.com/afeiship/next-git-log/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-git-log
[size-url]: https://github.com/afeiship/next-git-log/blob/master/dist/next-git-log.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-git-log
[download-url]: https://www.npmjs.com/package/@jswork/next-git-log
