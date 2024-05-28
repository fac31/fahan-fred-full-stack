import path from 'path';

export default {
    entry: './public/script.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve('public'),
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
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
};



