Vue.component("btn-like", {
    template: `<button @click="myMethod()">{{count}}</button>`,
    props: ["count"],
    methods: {
        myMethod() {
            // let newCount = this.count + 1
            this.$emit("increment")
        }
    }
})

new Vue( {
    el: "#app",
    data: {
        count: 0
    },
    methods: {
        increment: function(dataToShare) {
            this.count++
        }
    }

})