const planetsData = require('./data/planets.js');
const SolarSystem = require('./models/solar_system.js');
const ListView = require('./views/list_view.js');
const PlanetInfoView = require('./views/planet_info_view.js');
document.addEventListener('DOMContentLoaded', () => {

  // console.log(planetsDataModel.planets);

  const selectElement = document.querySelector("#planet-list");
  const planetsList = new ListView(selectElement);
  planetsList.bindEventsList();

  const selectResultElement = document.querySelector("#planet-info");
  const planetInfo = new PlanetInfoView(selectResultElement);
  planetInfo.bindEventsInfo();

  const planetsDataModel = new SolarSystem(planetsData);
  planetsDataModel.bindEventsSolar();

});
