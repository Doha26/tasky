module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "module-resolver",
        {
          extensions: [
            ".png",
            ".PNG",
            ".JPEG",
            ".jpeg",
            ".ios.ts",
            ".android.ts",
            ".ts",
            ".ios.tsx",
            ".android.tsx",
            ".tsx",
            ".jsx",
            ".js",
            ".json"
          ],
          alias: {
            "~": "./src"
          }
        }
      ]
    ]
  };
};
