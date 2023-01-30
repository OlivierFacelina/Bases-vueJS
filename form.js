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
        error: null,
    },

    methods: {
        filter: function() {
            let test = this.lastname.match(/^[A-z]+$/)
            if(!test){
            this.error = "Ce nom n'est pas au bon format"
            }
        },
        
        submit: function() {
            console.log(this.lastname, this.firstname, this.email, this.selection, this.message, this.picked, this.checkedCompetences)
        },

        resetForm() {
            this.$refs.form.reset();
          }
    }
})