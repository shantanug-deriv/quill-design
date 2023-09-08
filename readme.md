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
@binary-com:registry=https://npm.pkg.github.com/
```

- Install the package with:

```
npm install @binary-com/quill-design
```

NOTE: Please don't forget to enable SSO SAML configuration in your token

### Documentation

We use storybook as documentation platform for our components, you can find it [here](https://quill-design.pages.dev/).
