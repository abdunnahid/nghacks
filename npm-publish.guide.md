# Publish package to NPM

GitHub action only takes care of the update. Publishing package initially takes the steps below:

1. Login

```bash
npm login
```

2. Change to directory `main/dist/<package>`

3. Publish

```bash
npm publish --access public
```
