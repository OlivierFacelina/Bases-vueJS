var nw = new Vue( {
    el: '#form',

    data: {
        lastname: "",
        firstname: "",
        email: "",
        selection: "",
        message: "",
        picked: "",
        checkedCompetences: [],
        button: "Vous avez bien envoyé votre formulaire ! Merci à vous.",
        error: [],
        arrayofComp: ["1","2","3","4"]
    },

    
    methods: {
        filter: function(e) {
            let value = e.target.value
            let id = e.target.id
            let test = value.match(/^[A-z]+$/)
            if(!test){
            let error = {
                name: id,
                error: "Ce champ est incorrect"
            }
            this.error = [...this.error,error] // ... = copier tableau (récupérer tous les éléments)
        }
        else {
            
        }
    },
    
    submit: function() {
        console.log(this.lastname, this.firstname, this.email, this.selection, this.message, this.picked, this.checkedCompetences)
        },
        
    resetForm() {
        this.$refs.form.reset();
        },

    },

    mounted: function(){
        let container = document.querySelector('#array')
        let input = ""
        this.arrayofComp.map((item)=>{
            input += `<div>${item}</div>`
            console.log(item)
        })
        container.innerHTML = input
    },
})