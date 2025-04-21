const app = Vue.createApp({
  data: () => ({
    newItem: '',
    todos: []
  }),
  methods: {
    addItem: function(event) {
      // console.log('clicked!')
      const todo = {
        Item: this.newItem,
        isDone: false
      }
      this.todos.push(todo)
      this.newItem = ''
    },
  }
});
app.mount("#app");
