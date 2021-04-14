module.exports = (api) => {
    api.cache(true);
    return {
        presets: [
            ["@babel/env", {
                debug: true,
                modules: false,
                useBuiltIns: "usage",
                corejs: "core-js@3",
                targets: "> 1%, not dead",
            }],
            "@babel/typescript",
            "@babel/react",
        ],
        plugins: [],
    };
}
