Vue.component('task-list', {
    template: '#task-list',
    props: {
      tasks: {default: []}
    },
    data() {
      return {
        newTask: ''
      };
    },
    computed: {
      incomplete() {
        return this.tasks.filter(this.inProgress).length;
      }
    },
    methods: {
      addTask() {
        if (this.newTask) {
          this.tasks.push({
            title: this.newTask,
            completed: false
          });
          this.newTask = '';
        }
      },
      completeTask(task) {
        task.completed = ! task.completed;
      },
      removeTask(index) {
        this.tasks.splice(index, 1);
      },
      clearCompleted() {
        this.tasks = this.tasks.filter(this.inProgress);
      },
      clearAll() {
        this.tasks = [];
      },

      inProgress(task) {
        return ! this.isCompleted(task);
      },
      isCompleted(task) {
        return task.completed;
      }
    }
  });

  Vue.component('task-item', {
    template: '#task-item',
    props: ['task'],
    computed: {
      className() {
        let classes = ['tasksitemtoggle'];
        if (this.task.completed) {
          classes.push('tasksitemtoggle--completed');
        }
        return classes.join(' ');
      }
    }
  });

  new Vue({
    el: '#app',
    data: {
      tasks: [
        {
          title: 'Make todo list',
          completed: true
        },
        {
          title: 'Go skydiving',
          completed: false
        }
      ]
    }
  });