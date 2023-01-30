var nw = new Vue( {
    // Element 
    el: '#test',

    // Données / objet
    data: {
    //     fruit: {
    //         type: "fraise",
    //         couleur: "rouge",
    //     },
    //     fruit: {
    //         type: "banane",
    //         couleur: "jaune"
    // },
    //     fruit: {
    //         type: "pomme",
    //         couleur: "vert"
    //     },

        campusAm: {
            campus: "La Manu, campus d'Amiens",
            ville: "Amiens",
            adresse: "70 rue des Jacobins",
            telephone: "0986271204",
            email : "contact-amiens@lamanu.fr"
        }
        
        // message: "Yooo",
        // qui: "Bachelor",
        // isActive : false,
        // lamanu : "La Manu, l'école des métieurs du numérique",
    },
    
    // Fonction
    methods: {
    //     editMessage: function () {
    //         this.message = "Coucou"
    //     },
    //     changeClass: function() {
    //     this.isActive = !this.isActive
    // }
    }
})

// v-bind : rechercher dans les data
// v-on : recherche dans les methods
// v-if : condition
// v-for : boucler