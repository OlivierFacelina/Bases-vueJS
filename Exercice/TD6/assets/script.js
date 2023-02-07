Vue.component("task", {
    template: `<div>
                    <input type="checkbox">
                </div>`,
    props: ['titre','description','statut']
})

var nw = new Vue( {
    el: "#app",
    data: {
        id: 1,
        title: "",
        desc: "",
        todoList: false,
        tasks: [],
        undone: false
    },

    methods: {
      addItem: function() {
        this.todoList = true
        let array = [{
            title: this.title,
            desc: this.desc
        },
        ...this.tasks]
        this.tasks = array
    },

    removeTask(index) {
        this.tasks.splice(index, 1);
    },

    removeTaskCompleted(index) {
        if (this.undone === true) {
            this.tasks.splice(index, 1);
        }
    },

    clearAll() {
        this.tasks = [];
    },
    
    undonetest: function() {
        this.undone = !this.undone
    }

    }
    
})