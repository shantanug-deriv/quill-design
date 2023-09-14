[![Coverage Status](https://coveralls.io/repos/github/deriv-com/quill-design/badge.svg?branch=main)](https://coveralls.io/github/deriv-com/quill-design?branch=main)

## Quill Design

Deriv Quill Design UI Components

### Requirements

- Node v18.x
- Git v2.3x

### Install

- Install the package with:

```
npm install @deriv/quill-design
```

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
