import path from 'path';

export default {
    mode: 'production',
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve('public'),
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    devServer: {
        static: {
            directory: path.resolve('public'),
        },
        hot: true,
        open: true,
        port: 8080,
        proxy: [
            {
                context: ['/api', '/chat-api'],
                target: 'http://localhost:3300',
                secure: false
            }
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'], 
    },
};