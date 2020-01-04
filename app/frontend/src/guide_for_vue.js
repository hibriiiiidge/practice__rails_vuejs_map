/* eslint no-console: 0 */
// Run this example by adding <%= javascript_pack_tag 'hello_vue' %> (and
// <%= stylesheet_pack_tag 'hello_vue' %> if you have styles in your component)
// to the head of your layout file,
// like app/views/layouts/application.html.erb.
// All it does is render <div>Hello Vue</div> at the bottom of the page.
// app/views/layouts/application.html.erb　のような layout ファイルに <%= javascript_pack_tag 'hello_vue' %> を追加して、動作させてみると
// ページの下部に <div>Hello Vue</div> が表示される


// import Vue from 'vue'
// import App from '../app.vue'

// document.addEventListener('DOMContentLoaded', () => {
//   const app = new Vue({
//     render: h => h(App)
//   }).$mount()
//   document.body.appendChild(app.$el)

//   console.log(app)
// })


// The above code uses Vue without the compiler, which means you cannot　use Vue to target elements in your existing html templates.
// 上記のコードは、コンパイラなしでVueを使用します。つまり、Vueを使用して既存のhtmlテンプレートの要素をターゲットにすることはできません。
// You would need to always use single file components.
// 常に単一のファイルコンポーネントを使用する必要があります。
// To be able to target elements in your existing html/erb templates,
// 既存のhtml / erbテンプレートの要素をターゲットにできるようにするには
// comment out the above code and uncomment the below
// 上のコードをコメントアウトして、下のコメントアウトを外し
// Add <%= javascript_pack_tag 'hello_vue' %> to your layout
//  <%= javascript_pack_tag 'hello_vue' %> を layout ファイルに追加する
// Then add this markup to your html template:
// それから　html テンプレートをマークアップする
//
// <div id='hello'>
//   {{message}}
//   <app></app>
// </div>


// import Vue from 'vue/dist/vue.esm'
// import App from '../app.vue'
//
// document.addEventListener('DOMContentLoaded', () => {
//   const app = new Vue({
//     el: '#hello',
//     data: {
//       message: "Can you say hello?"
//     },
//     components: { App }
//   })
// })
//
//
//
// If the project is using turbolinks, install 'vue-turbolinks':
//　turbolinks　を使っている場合は、vue-turbolinksをインストールして、
//
// yarn add vue-turbolinks
//
// Then uncomment the code block below:
// 下のブロックのコメントを外す
//
// import TurbolinksAdapter from 'vue-turbolinks'
// import Vue from 'vue/dist/vue.esm'
// import App from '../app.vue'
//
// Vue.use(TurbolinksAdapter)
//
// document.addEventListener('turbolinks:load', () => {
//   const app = new Vue({
//     el: '#hello',
//     data: () => {
//       return {
//         message: "Can you say hello?"
//       }
//     },
//     components: { App }
//   })
// })
