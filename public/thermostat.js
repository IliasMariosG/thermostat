function Thermostat() {
  this.temperature = 20;
  
  this.powerSavingMode = true;
  this.powerSavingModeOn = function(){
   this.powerSavingMode = true;
  }
  this.maxTemp = function() { 
    if (this.powerSavingMode) {
     return 25
    }
    else {
     return 32;
    };
  };
 
  this.powerSavingModeOff = function() {
   this.powerSavingMode = false;
  };
  
  this.increase = function() {
   if (this.temperature < this.maxTemp()) { 
   this.temperature++
   };
  };
  this.decrease = function() {
   if (this.temperature > 10) { 
   this.temperature-- 
   }
 };
};
