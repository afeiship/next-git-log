# next-git-log
> Git logs.

## installation
```bash
npm install -S @feizheng/next-git-log
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
import '@feizheng/next-git-log';

nx.gitLog({ since: '2020-06-01' }).then(res => {
  console.log(res);
});

// c1b0ca1 - docs: initail
// 6f6380f - refactor: use tmpl for template
// 5b51e88 - feat: initail

```
