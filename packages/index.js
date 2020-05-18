import Button from './Button.vue'
import Dialog from './Dialog.vue'
import Slider from './Slider.vue'
import Card from './Card.vue'
import Drawer from './Drawer.vue'
import './fonts/iconfont.css'

const components = [
  Button,
  Dialog,
  Slider,
  Card,
  Drawer
]
const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}
// 是否直接引入文件,是则不用 Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install
}
