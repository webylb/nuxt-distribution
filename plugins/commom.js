import Vue from 'vue'

var COMSYS = {
  install(Vue) {
    Vue.prototype.comsys = {
      name: "yann",
      val: function(val) {
        return val
      }
    }
  }
}

Vue.use(COMSYS);