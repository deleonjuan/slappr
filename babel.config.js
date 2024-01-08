module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ["./src"],
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.android.js',
          '.android.tsx',
          '.ios.js',
          '.ios.tsx',
        ],
        alias: {
          '@screens': './src/screens',
          '@store': './src/store',
          '@utils': './src/utils',
          '@components': './src/components',
          '@project': './src',
        },
      },
    ],
  ],
};
