const { environment } = require('@rails/webpacker')

const { VueLoaderPlugin } = require('vue-loader')
environment.plugins.prepend('VueLoaderPlugin', new VueLoaderPlugin())

const vue = require('./loaders/vue')
environment.loaders.prepend('vue', vue)

const customConfig = require('./config/alias')
environment.config.merge(customConfig)

module.exports = environment

// module.exports = environment.merge({
//   resolve: {
//     alias: {
//       'vue$': 'vue/dist/vue.esm.js'
//     }
//   }
// })
