// import Vue from 'vue'
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

import Vue from 'vue/dist/vue.esm'
import App from '../components/app.vue'

export default {
  start: () => {
    document.addEventListener('DOMContentLoaded', () => {
      const app = new Vue({
        el: '#hello',
        data: {
          message: "Can you say hello?"
        },
        components: { App }
      })
    })
  }
}
