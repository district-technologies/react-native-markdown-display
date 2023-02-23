module.exports = {
  root: true,
  extends: '@react-native-community',
  parserOptions: {
    babelOptions: {
      parserOpts: {
        plugins: ['jsx', 'typescript'],
      },
    },
  },
};
