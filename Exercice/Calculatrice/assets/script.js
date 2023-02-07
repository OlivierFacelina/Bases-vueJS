var vm = new Vue({
    el: '#app',
    data: {
      numSelected: 0,
      decimal: false,
      total: 0,
      previousOperations: 0,
      result: '',
    },
  
    methods: {
        // Fonction pour les nb décimaux
      addDecimal: function() {
        if (this.decimal == false) {
          if (this.previousOperations != 0) {
            this.result = '.';
          } else {
            this.result += '.';
          }
          this.decimal = true;
        }
      },
      clear: function() {
        this.numSelected = 0;
        this.decimal = false;
        this.total = 0;
        this.result = '';
        this.previousOperations = 0;
      },
      del: function() {
        if (this.numSelected > 0) {
          if (this.decimal == false) {
            this.numSelected = parseInt(this.numSelected.toString().slice(0, -1), 10);
          } else {
            this.numSelected = parseFloat(this.numSelected.toString().slice(0, -1));
          }
  
          if (isNaN(this.numSelected))
            this.numSelected = 0;
          this.result = this.numSelected;
        } else if (this.numSelected == 0) {
          this.result = '';
        }
      },
      enterNum: function(val) {
        if (this.numSelected == 0) {
          if (this.previousOperations == 0)
            this.total = 0;
  
          if (this.decimal == true) {
            this.numSelected = val / 10;
            this.result += val.toString();
          } else {
            this.numSelected = val;
            this.result = val.toString();
          }
        } else {
          if (this.decimal == true) {
            if (this.numSelected.toString().indexOf('.') == -1) {
              this.numSelected = parseFloat(this.numSelected.toString() + '.' + val.toString());
            } else {
              this.numSelected += val.toString();
              this.numSelected = parseFloat(this.numSelected);
            }
          } else {
            this.numSelected *= 10;
            this.numSelected += val;
          }
          this.result += val.toString();
        }
      },
      enterOps: function(ops) {
        if (this.total == 0 && this.numSelected == 0) {
          return;
        }
        if (this.total == 0) {
          this.total += this.numSelected;
        }
        switch (this.previousOperations) {
          case 1:
            this.total += this.numSelected;
            break;
          case 2:
            this.total -= this.numSelected;
            break;
          case 3:
            this.total *= this.numSelected;
            break;
          case 4:
            this.total /= this.numSelected;
            break;
          case 0:
            break;
        }
  
        if (this.decimal == true) {
          this.decimal = false;
        }
        this.numSelected = 0;
        this.previousOperations = ops;
      },
      sum: function() {
        switch (this.previousOperations) {
          case 1:
            this.total += this.numSelected;
            break;
          case 2:
            this.total -= this.numSelected;
            break;
          case 3:
            this.total *= this.numSelected;
            break;
          case 4:
            this.total /= this.numSelected;
            break;
          case 0:
            break;
        }
        this.result = this.total.toString();
        this.previousOperations = 0;
        this.numSelected = 0;
      }
    }
  })