export default {
  install(Vue) {
    let app = new Vue({
      data() {
        return {
          isRTL: false
        }
      },
    });

    Vue.prototype.$rtl = app;
  }
}
