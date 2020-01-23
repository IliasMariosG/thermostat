describe("Thermostat", function() {
 
  it("has a temperature of 20 degrees", function() {
    var thermostat = new Thermostat()

    expect(thermostat.temperature).toBe(20);
  });
  
  it("increases temperature", function() {
    var thermostat = new Thermostat()
    thermostat.increase()
    expect(thermostat.temperature).toBe(21);
  });
  
  it("decreases temperature", function() {
    var thermostat = new Thermostat()
    thermostat.decrease()
  expect(thermostat.temperature).toBe(19);
  });
  it("has a minimun limit of 10 degrees", function() {
    var thermostat = new Thermostat
    for (i = 0; i < 11 ; i++) { 
      thermostat.decrease();
    }
  expect(thermostat.temperature).toBe(10);
  });
  it("has a max limit of 25 when powersaving on", function() {
   var thermostat = new Thermostat
   thermostat.powerSavingModeOn()
   for (i = 0; i < 6 ; i++) { 
     thermostat.increase();
   }
  expect(thermostat.temperature).toBe(25);
  });
  it("has a max limit of 32 when powersaving: off", function() {
    var thermostat = new Thermostat
    thermostat.powerSavingModeOff()
    for (i = 0; i < 13 ; i++) { 
      thermostat.increase();
    }
  expect(thermostat.temperature).toBe(32);
});
  
});