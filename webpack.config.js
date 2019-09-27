/**
 * Created by lenovo on 2019/9/23.
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name][hash:base64:8].js'
  },

  devServer: {
    contentBase: path.join(__dirname, 'dist'), // 静态资源路径
    // compress: true, //启用压缩模式
    hot: true,
    noInfo: true,
    open: true,
    historyApiFallback: true, // 页面出现cannot GET时增加此项配置
    // lazy: true,
    // overlay: { // 懒加载模式下，控制台输出告警和错误信息
    //   warnings: true,
    //   errors: true
    // },
    port: 8888
  },

  plugins: [
    new CleanWebpackPlugin(), // 每次编译清空输出文件夹
    new HtmlWebpackPlugin({ //根据webpack打包规则生成html模板
      title: 'React-Frame-Test',
      template: './src/index.html'
    }),
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        // exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            // cacheDirectory: true,
            plugins: [
              ['import', { libraryName: 'antd', style: 'css' }], // 模块的按需加载
              '@babel/plugin-proposal-class-properties'
            ]
          }
        }
      },
      {
        test: /\.(less|css)$/, // 编译自己写的css，less
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[local]-[hash:base64:5]'
              }, // css 模块化,注意s

            }
          },
          // {
          //   loader: 'postcss-loader' //自动添加浏览器厂商前缀
          // },
          {
            loader: 'less-loader'
          }
        ]
      },
      {
        test: /\.(less|css)$/, // 编译antd的css，less,不能加模块化
        include: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',

          },
          // {
          //   loader: 'postcss-loader' //自动添加浏览器厂商前缀
          // },
          {
            loader: 'less-loader'
          }
        ]
      },
      {
        test: /\.(gif|png|jpg|jpeg)$/,
        use: ['file-loader']
      }
    ]
  }

};