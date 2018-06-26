const PubSub = require('../helpers/pub_sub.js');

const SolarSystem = function(planets) {
  this.planets = planets;
};

SolarSystem.prototype.bindEventsSolar = function(){
  PubSub.publish('Planets:all-planets', this.planets);
  PubSub.subscribe('ListView:click', (evt) => {
    const planetName = evt.detail;
    console.log(planetName);
    const selectedPlanet = this.planets.find(function(element){
      return element.name == planetName;
    })
    console.log(selectedPlanet);
    PubSub.publish('SolarSystem:selected-planet-ready', selectedPlanet)
  });
};

module.exports = SolarSystem;
