// FACELINA Olivier

var nw = new Vue({
    el: "#app",
    data: {       
        formTitle: "Inscription",
        characterMin: "Au moins 8 caractères",
        minusculeChar: "Au moins 1 minuscule",
        specialChar: "Au moins 1 caractère spécial",
        chiffre: "Au moins 1 chiffre",
        email: "",
        password: "",
        isActive: true,
    },
    methods: {
        togglePwdView: function() {
            // On récupère l'attribut "type" et l'icône à l'aide des query selectors 
            passInput = document.getElementById("userPwd");
            // console.log(passInput)
            eyeIcon = document.querySelector("i");
            // console.log(eyeIcon)
            
            // Si l'input est un passord
            if (passInput.type === "password") {
                // On change l'input en texte
                passInput.type = "text";
                // Question 5, on change les classes à l'aide de "classList"
                eyeIcon.classList.remove("fa-eye-slash");
                eyeIcon.classList.add("fa-eye");
            } else {
                // Permet de gérer le retour : de remettre le password à la place du texte dans l'input
                passInput.type = "password";
                // Question 5, faire le retour pour lui dire de rechanger si la classe est "fa-eye"
                eyeIcon.classList.remove("fa-eye");
                eyeIcon.classList.add("fa-eye-slash");
            }
          },
          // On va lui dire d'afficher dans la console ce qu'il a saisi, pour cela on doit récupérer dans les data et grâce au v-model ces infos
          sendUserInfos: function() {
            console.log(this.email, this.password)
          }
    }
})
