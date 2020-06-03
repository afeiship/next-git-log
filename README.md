# next-git-log
> Git logs.

## installation
```bash
npm install -S @alo7i/next-git-log
```

## usage
```js
import '@alo7i/next-git-log';

nx.gitLog({ since: '2020-06-01' }).then(res => {
  console.log(res);
});

// c1b0ca1 - docs: initail
// 6f6380f - refactor: use tmpl for template
// 5b51e88 - feat: initail

```
