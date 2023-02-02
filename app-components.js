Vue.component("post-item", {
    template: 
        `<div class="post-item col-4">
            <div class="card">
                <p>{{title}}</p> 
                <p>{{description}}</p>
                <slot></slot>
            </div>
        </div>`,
        props: ['title','description']
})

Vue.component("jaime-btn",{
    template: `<div>
                    <img src="/node_modules/bootstrap-icons/icons/hand-thumbs-up-fill.svg" alt="pouce" @click="change"/>
                </div>`,
    methods: {
        change: function() {
            img = this.$el.querySelector("img")
            thumb = img.getAttribute("src")
            if (thumb == "/node_modules/bootstrap-icons/icons/hand-thumbs-up-fill.svg") {
                img.setAttribute("src","/node_modules/bootstrap-icons/icons/hand-thumbs-down-fill.svg")
            }
            else {
                img.setAttribute("src","/node_modules/bootstrap-icons/icons/hand-thumbs-up-fill.svg")
            }
        }
    }
})

var nw = new Vue( {
    el: '#app',
    data: {
        postList: [{
            title: "Bienvenue chez Les Ch'tis",
            description: "Film",
        },
        {
            title: "Cars",
            description: "Disney"
        },
        {
            title: "Diner de cons",
            description: "Série"
        }]
    },
})
