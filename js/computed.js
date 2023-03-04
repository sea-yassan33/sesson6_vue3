const app1 = Vue.createApp({
  data: () => ({
    message: 'Hello Vue.js'
  }),
  computed: {
    reverseMessage: function() {
      return this.message.split('').reverse().join('')
    }
  },
  methods: {
    reverseMessageMethod: function() {
      return this.message.split('').reverse().join('')
    }
  }
})
app1.mount('#app1')