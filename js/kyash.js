const app3 = Vue.createApp({
  data: () => ({
    
  }),
  computed: {
    computedNumber: function(){
      return Math.random()
    }
  },
  methods: {
    methodsNumber: function(){
      return Math.random()
    }
  }
})
app3.mount('#app3')