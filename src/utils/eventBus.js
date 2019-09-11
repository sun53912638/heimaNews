// eventBus共享一个vue实例
import Vue from 'vue'
export default new Vue()
// 其实背后就是个原理,通过bus.$emit然后涉及到原型链的查找,相当于直接是针对根组件app执行的$emit和$on,站在一个上帝
// 视角,最顶层的足尖上,就能形成换一个事件总线,这样不同的兄弟组件之间就能进行通信了.
