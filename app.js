var nw = new Vue( {
    // Element 
    el: '#test',

    // Données / objet
    data: {
        count: 0
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

        // campusAm: {
        //     id: 0,
        //     campus: "La Manu, campus d'Amiens",
        //     ville: "Amiens",
        //     adresse: "70 rue des Jacobins",
        //     telephone: "0986271204",
        //     email : "contact-amiens@lamanu.fr"
        // }
        
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

// v-bind ou : : rechercher dans les data
// v-on ou @: recherche dans les methods, pour les event
// v-if : condition
// v-for : boucler