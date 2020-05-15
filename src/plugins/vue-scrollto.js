import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'

Vue.use(VueScrollTo,{
    //duration:アニメーションに掛ける時間
    duration: 700,
    //easing:動きの緩急調整
    easing: [0, 0, 0.1, 1],
    //offset: 指定した要素より少し上または下に飛びたいときに使用する
    offset: -50,
})


// Vue.use(VueScrollTo)

// export default function vueScrollTo (context,inject){
//     inject('scrollTo',vueScrollTo.scrollTo)
// }