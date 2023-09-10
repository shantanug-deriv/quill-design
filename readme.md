[![Coverage Status](https://coveralls.io/repos/github/deriv-com/quill-design/badge.svg?branch=main)](https://coveralls.io/github/deriv-com/quill-design?branch=main)

## Quill Design

Deriv Quill Design UI Components

### Requirements

- Node v18.x
- Git v2.3x

### Install

To install packages from github npm registry, you have to create a personal github access token and added to your npm configuration in your home directory `~/.npmrc` file.

To create the token please follow these steps:

- Go to [Github Developer/Personal Access Token (classic)](https://github.com/settings/tokens)
- Create a personal access token (classic) with only **read:packages** scope to install packages associated with other private repositories (which GITHUB_TOKEN can't access).
- Update your `~/.npmrc` file in your home directory
- Add these lines to `~/.npmrc`

**Note:** please check [Installing a npm package from github](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#installing-a-package) for more information about github packages

```
//npm.pkg.github.com/:_authToken=YOUR_PERSONAL_READ_TOKEN
@deriv-com:registry=https://npm.pkg.github.com/
```

- Install the package with:

```
npm install @deriv-com/quill-design
```

NOTE: Please don't forget to enable SSO SAML configuration in your token

### Documentation

We use storybook as documentation platform for our components, you can find it [here](https://quill-design.pages.dev/).

### Local Build and Usage
If you want to change a feature and test it in a real application: 
1. `mkdir quill-dev`
2. `cd quill-dev`
3. setup a project with vite, nextjs, or gatsby, for example with vite: `npm create vite@latest`
4. `cd ..`
5. `git clone git@github.com:deriv-com/quill-design.git`
6. `cd quill-design && npm ci`
7. `npx rollup --config rollup.config.ts --configPlugin typescript --watch`
8. open a new terminal
9. `cd quill-dev`
10. install the local package
11. `npm install ../quill-design`
