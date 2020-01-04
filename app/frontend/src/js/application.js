// import Vue from 'vue'
// ランタイム限定ビルド
// import App from '../components/app.vue'

// export default {
//   start: () => {
//     document.addEventListener('DOMContentLoaded', () => {
//       const app = new Vue({
//         render: h => h(App)
//         // hとは？ https://github.com/vuejs-templates/webpack-simple/issues/29
//       }).$mount()
//        // vm.$mount() は アンマウントな Vue インスタンスのマウンティングを手動で開始するために使用することができます。
//        // https://jp.vuejs.org/v2/api/index.html
//        // インスタンスを生成し、#app にマウント(#app を置換)
//        //new MyComponent().$mount('#app')
//        // 上記と同じです:
//        //new MyComponent({ el: '#app' })
//       document.body.appendChild(app.$el)
//       // body の末に app.$el を追加している
//       // $el は Vue インスタンス
//       console.log(app)
//     })
//   }
// }

// import Vue from 'vue/dist/vue.esm'
import Vue from 'vue'
// 完全ビルド
// html側（SFCではなく）にテンプレートが書かれている場合は実行時コンパイルのために完全ビルドが必要
// import App from '../components/app.vue'

// export default {
//   start: () => {
//     document.addEventListener('DOMContentLoaded', () => {
//       const app = new Vue({
//         el: '#hello',
//         data: {
//           message: "Can you say hello?"
//         },
//         components: { App }
//       })
//     })
//   }
// }

export default {
  start: () => {
    let vueInstances = []
    let components = {}
    let requireContext = require.context('src/js/components', false, /\.vue$|\.js$/)

    // console.log("keys1: " + requireContext.keys()[0]);
    // console.log("keys2: " + requireContext.keys()[0].split('/'));
    // console.log("keys3: " + requireContext.keys()[0].split('/').pop());
    // console.log("keys4: " + requireContext.keys()[0].split('/').pop().split('.'));
    // console.log("keys5: " + requireContext.keys()[0].split('/').pop().split('.').shift());

    requireContext.keys().forEach(key => {
      // let name = key.split('/').pop().split('.').shift()
      components[name] = requireContext(key).default
      // let name = key.match(/\/(.*?).(vue|js)/);
      // components[name[1]] = requireContext(key).default
      // export default の default
    })

    document.addEventListener('turbolinks:load', () => {
      let templates = document.querySelectorAll('[data-vue]')

      for (let el of templates) {
        let vm = new Vue(Object.assign(components[el.dataset.vue], { el }))
        // let vm = new Vue({ ...components[el.dataset.vue], ...{ el } })
        vueInstances.push(vm)
      }
    })

    document.addEventListener('turbolinks:visit', () => {
      for (let vm of vueInstances) {
        vm.$destroy()
      }
      vueInstances = []
    })
  }
}

