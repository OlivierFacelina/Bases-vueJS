var nw = new Vue( {
    el: '#app',

    data: {
        tempsEcoul: 0,
        lengthInput: 0,
    },

    mounted: function(){
        this.Interval = setInterval(function() {
            this.tempsEcoul++; 
            console.log('Temps fugit')     
        }, 1000);
    },
    
    // destroyed() {
    //     clearInterval(this.Interval)
    // }

    computed: {
        lengthInches() {
          return (this.lengthInput * 39.37).toFixed(2)
        },
        lengthSmoot() {
          return (this.lengthInput * 1.7).toFixed(2)
        }
      }
})
// nw.$destroy()

