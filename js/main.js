const app = Vue.createApp({
  data: () => ({
    newItem: '',
    todos: []
  }),
  methods: {
    addItem: function(event) {
      console.log('clicked!')
      let todo = {
        Item: this.newItem
      }
    }
  }
});
app.mount("#app");
