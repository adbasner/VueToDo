var HomePage = {
  template: "#home-page",
  data: function() {
    return {
      message: "Welcome to Vue.js!",
      message2: "message2",
      message3: "sldfjasf",
      tasks: 
      [
        {
          id: 1,
          todo: "Something",
          complete: false
        },
        {
          id: 2,
          todo: "Something else",
          complete: false 
        },
        {
          id: 3,
          todo: "Something more",
          complete: true 
        }
      ],
      newTodo:
      {
        id: "",
        todo: "",
        complete: false
      }
    };
  },
  created: function() {},
  methods: {
    addTodo: function() {
      console.log("Adding item to todo list");
      var newId = this.tasks.length + 1;
      var newTodoItem = {
        id: newId,
        todo: this.newTodo.todo,
        complete: false
      };

      if (this.newTodo.todo === "") {
        console.log('Empty todo, not added');
        // this.tasks.push({         
        //   id: newId,
        //   todo: "EMPTY",
        //   complete: false 
        // });
      } else {
        this.tasks.push(newTodoItem);
        console.log('Added a todo');
      }

      this.newTodo.todo = "";
    }
  },
  computed: {}
};

var router = new VueRouter({
  routes: [{ path: "/", component: HomePage }],
  scrollBehavior: function(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

var app = new Vue({
  el: "#vue-app",
  router: router
});

// var tasks = axios.get('/api/tasks').then(function(response.data) { 

// });