# Setup

Here are all single steps described to install and setup a mono repository.
The Project is focused on using Typescript and will support styled-components.

## Motivation

### why lerna?
As there are different tools then lerna to manage a monorepo, lerna is widely adopted in the opensource community and is quite mature.

There are tools like npm 7 with workspaces, pnpm + rush, yarn 2 to name a few. But lerna is still the number 1 in adoption.

### why webpack?
For building and shipping applications, webpack is the bundler of choice, as it is optimized for apps and has a very powerful toolchain for that purpose.
As there as well other tools, webpack is the defacto standard.

## setup a project
```
mkdir my-project
cd my-myproject
git init
yarn init
```

## installation of root packages

### installing lerna globally
Lerna should be installed globally, as an alternative npx could be used.

```shell script
yarn global add lerna rimraf
```

### initialize lerna
Will create a lerna.json with the basic settings.
```
lerna init
```
#### configure lerna.json

### installing some misc packages
```shell script
yarn add --dev core-js cross-env husky@4 nodemon rimraf
```
Note: using husky v4 makes the usage and integration easier as the latest breaking changes are not compatible with the known one.
Later a migration to the latest husky or an alternative, like [lefthook](https://github.com/evilmartians/lefthook), will be applied.

### installing commitlint packages
```shell script
yarn add --dev @commitlint/{config-conventional,config-lerna-scopes,cli} standard-version
```

#### setup husky for integration of commitlint

create [config/commitlint.config.js](../config/commitlint.config.js) file.
adding husky for running commitlint and eslint as pre-commit and commit-msg to [package.json](../package.json)

The commitlint config is extended to support some special requirements to the project.
```json
{
  "husky": {
    "hooks": {
      "pre-commit": "yarn ci",
      "commit-msg": "commitlint --config ./config/commitlint.config.js --env HUSKY_GIT_PARAMS"
    }
  }
}
```

### installing Typescript packages
```shell script
yarn add --dev  typescript tslib @types/node
```

#### setup typescript config
* create [config/tsconfig.base.json](../config/tsconfig.base.json) file.
* create [config/tsconfig.eslint.json](../config/tsconfig.eslint.json) file.
* create [tsconfig.json](../tsconfig.json) file.

in [tsconfig.json](../tsconfig.json) and [config/tsconfig.eslint.json](../config/tsconfig.eslint.json) add the following
```json
{
  "extends": "./config/tsconfig.base.json"
}
```
### installing babel packages
```shell script
yarn add --dev @babel/{cli,core,preset-env,preset-typescript,preset-react} babel-plugin-styled-components
```
#### setup babel config

* create [config/babel.base.js](../config/babel.base.js) file.

### installing webpack packages
```shell script
yarn add --dev webpack webpack-cli webpack-dev-server webpack-merge babel-loader clean-webpack-plugin copy-webpack-plugin file-loader url-loader case-sensitive-paths-webpack-plugin html-webpack-plugin terser-webpack-plugin @statoscope/ui-webpack webpack-bundle-analyzer
```

#### setup webpack config

* create [config/webpack.utils.js](../config/webpack.utils.js) file.
* create [config/webpack.base.js](../config/webpack.base.js) file.
* create [config/webpack.production.js](../config/webpack.production.js) file.
* create [config/webpack.development.js](../config/webpack.development.js) file.

### installing eslint packages
```shell script
yarn add --dev eslint eslint-config-airbnb-typescript eslint-plugin-import eslint-plugin-react eslint-plugin-react-hooks @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-jsx-a11y eslint-plugin-jest
```

#### setup eslint configs

### installing jest and testing-library packages
```shell script
yarn add --dev jest@next @types/jest jest-styled-components @testing-library/react @testing-library/jest-dom
```

#### setup jest configs

* create [config/jest.config.js](../config/jest.config.js) file.


TODO:
* styleguidist installation and setup
