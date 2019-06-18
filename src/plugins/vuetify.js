import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify, {
  theme: {
    direction: 'rtl',
    primary: "#7B1FA2",
    secondary: "#9C27B0",
    accent: "#E1BEE7",
    error: "#FFFFFF",
    warning: "#E040FB",
    info: "#212121",
    success: "#757575"
  }
})
