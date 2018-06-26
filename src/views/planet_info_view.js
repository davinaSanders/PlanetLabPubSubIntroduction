const PubSub = require('../helpers/pub_sub.js');

const PlanetInfoView = function(container){
  this.container = container;
};

PlanetInfoView.prototype.bindEventsInfo = function(){
  console.log("hi");
  PubSub.subscribe('SolarSystem:selected-planet-ready', (evt) => {
    const selectedPlanet = evt.detail;
    console.log(selectedPlanet);
    this.generate(selectedPlanet);
  });
};

PlanetInfoView.prototype.generate = function(planet){
  this.container.innerHTML = '';
  const infoParagraph = document.createElement('p');
  console.log(infoParagraph);
  infoParagraph.textContent = `${planet.name} ${planet.day} ${planet.orbit} ${planet.surfaceArea} ${planet.volume} ${planet.gravity} ${planet.moons}`;
  console.log(infoParagraph);
  this.container.appendChild(infoParagraph);
};

module.exports = PlanetInfoView;
