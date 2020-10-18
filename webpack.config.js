const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { loader } = require('mini-css-extract-plugin');

module.exports = (env={}) => {

    const {mode = 'development'} = env;
    
    const isProd = env.mode === 'production';
    const isDev = env.mode === 'development';

    getStyleLoaders = () => {
        return [
            {loader: isProd ? MiniCssExtractPlugin.loader : 'style-loader'},
            {loader: 'css-loader'}
        ]
        
    };

    getPlugins = () => {
        const plugins = [new HtmlWebpackPlugin({template: 'public/index.html'})];
        if(isProd) {
           plugins.push(new MiniCssExtractPlugin({filename: 'main-[hash:8].css'}))  
        };
        return plugins;
    };

    return {
        mode: isProd ? 'production' : isDev && 'development',
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'main.js',
            publicPath: '/'
          },
        module: { 
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                presets: [
                                    '@babel/preset-env',
                                    '@babel/preset-react'
                                ],
                                plugins: [
                                     "@babel/plugin-transform-react-jsx",
                                     "@babel/plugin-proposal-class-properties"
                                ]
                            }
                        }
                    ]
                },
                {
                    test: /\.css$/,
                    exclude: /node_modules/,
                    use: getStyleLoaders()
                }
            ]
        },
        devServer: {
            historyApiFallback: true,
          },
        plugins: getPlugins()
        // plugins: [
        //     new HtmlWebpackPlugin({template: 'public/index.html'}),
        //     new MiniCssExtractPlugin({filename: 'main-[hash:8].css'})
        // ]
    };
} 
