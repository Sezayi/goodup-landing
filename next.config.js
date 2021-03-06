//  // next.config.js
//  const withImages = require('next-images')
//  module.exports = withImages()
 
 
 const withCSS = require('@zeit/next-css')
    module.exports = withCSS({
        webpack: function (config) {
            config.module.rules.push({
                test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 100000,
                        name: '[name].[ext]'
                    }
                }
            })
            return config
        }
    })


