module.exports = ( api ) => {
  api.cache( true );
  return {
    presets: [
      [ "@babel/env", {
        debug: false,
        modules: "auto",
        useBuiltIns: "usage",
        corejs: "core-js@3",
        targets: { browsers: "> 1%, not dead", node: "current" },
      } ],
      "@babel/typescript",
      "@babel/react",
    ],
    plugins: [],
  };
};
