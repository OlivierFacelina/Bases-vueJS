Vue.component("test-coucou", {
    template: 
        // '<button class="btn btn-primary" @click="count++">{{count}}</button>',
        // '#test-coucou',
        // `<div class='alert alert-success' role='alert'>
        //     <slot></slot>
        // </div>`,
        `<div class='alert alert-success'>
            <p>{{title}}</p>
            <p>{{desc}}</p>
        </div>`,
        props: ['title','desc']

    // data() {
    //     return {
    //         // count: 0,
    //     }
    // }
    // mounted: function() {
    //     console.log(this)
    //     setTimeout(() => {
    //         this.$el.innerHTML= "";
    //     }, 2000)
    // }
});

new Vue( {
    el: '#app',
    data: {
        array: [{
            title: 'Super',
            desc: 'Chouette'
        },
        {
            title: 'Super2',
            desc: 'Chouette'
        },
        {
            title: 'Super3',
            desc: 'Chouette'
        }
    ]
    }
});