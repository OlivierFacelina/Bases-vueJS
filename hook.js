var nw = new Vue( {
    el: '#app',

    data: {
        tempsEcoul: 0
    },

    mounted: function(){
        this.Interval = setInterval(function() {
            this.tempsEcoul++; 
            console.log('Temps fugit')     
        }, 1000);
    },
    
    destroyed() {
        clearInterval(this.Interval)
    }
})
nw.$destroy()
