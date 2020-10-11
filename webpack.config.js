let path = require('path');

let conf = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './build/'),
        filename: 'main.js',
        publicPath: 'build/'
    },
    module: { 
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env'
                        ], 
                        plugins: [
                             "@babel/plugin-transform-react-jsx",
                             "@babel/plugin-proposal-class-properties"
                        ]
                    }
                }
            }
        ]
    }
};

module.exports = conf;