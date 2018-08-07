var HomePage = {
  template: "#home-page",
  data: function() {
    return {
      message: "Welcome to the world's best todo app",
      tasks: 
      [
        { id: 1, todo: "Something", complete: false },
        { id: 2, todo: "Something else", complete: false },
        { id: 3, todo: "Something more", complete: true }
      ],
      newTodo:
        { id: "", todo: "", complete: false }
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

      if (this.newTodo.todo !== "") {
        this.tasks.push(newTodoItem);
      } 

      this.newTodo.todo = "";
    },

    toggleTask: function(inputTask) {
      inputTask.complete = !inputTask.complete;
    },
    
    totalTasks: function() {
      return this.tasks.length;
    },

    remainingTasks: function() {
      var remaining = this.tasks.length;
      for (var i = 0; i < this.tasks.length; i++) {
        if (this.tasks[i].complete === true) {
          remaining--;
        }
      }
      return remaining;
    },

    deleteCompleted: function() {
      for (var i = this.tasks.length - 1; i >= 0; i--) {
        if (this.tasks[i].complete === true) {
          this.tasks.splice(i, 1);
        }
      }
    }
    // Brian made a new array, pushing incomplete tasks into it, then 

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

// changed this function to toggle task
// removeTodo: function(inputTask) {
//   // find index
//   var index = this.tasks.indexOf(inputTask);
//   // remove index from array
//   this.tasks.splice(index, 1);
//   // this.tasks
// }

