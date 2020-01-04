// import Vue from 'vue'
// import App from '../components/app.vue'

// export default {
//   start: () => {
//     document.addEventListener('DOMContentLoaded', () => {
//       const app = new Vue({
//         render: h => h(App)
//       }).$mount()
//       document.body.appendChild(app.$el)

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
