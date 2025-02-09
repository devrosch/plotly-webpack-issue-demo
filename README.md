# plotly-webpack-issue-demo

Minimal project demonstrating a build issue with Webpack 5 and Plotly.js 3.

Running the following commands fails with build errors.

```
npm install
npm run build
```

The build succeeds if the version of `plotly.js-dist-min` is downgraded to 2.34.2.
