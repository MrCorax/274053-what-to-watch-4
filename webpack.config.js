const path = require(`path`);
const way = path.join(__dirname, `public`);

module.exports = {
  entry: `./src/index.js`,  // точка входа
  output: {
    filename: `bundle.js`, // название файла
    path: way // куда его сохранить
  }, // то куда собирается
  devServer: {
    contentBase: way,
    open: true, // открывать или не открывать браузер
    inline: true, // автообновление страницы в браузере
    port: 1337,
  },
  module: {
    rules: [ // учит webpack работать с jsx
      {
        test: /\.(js|jsx)$/, // регулярное выражение, если у файла расширения js or jsx то мы его применяем
        exclude: /node_modules/, // тут не ищем
        use: {
          loader: `babel-loader`, // подключает лоадер для этих типов файлов
        },
      }
    ],
  },
  devtool: `source-map`, // показывает как код был на самом деле
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, `./src/components`),
    }
  }
};
