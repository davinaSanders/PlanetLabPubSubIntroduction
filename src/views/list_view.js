const PubSub = require('../helpers/pub_sub.js');

const ListView = function(element){
  this.element = element;
  console.log(this.element);
};

ListView.prototype.bindEventsList = function(){
  console.log("string");
  PubSub.subscribe('Planets:all-planets', (evt) => {
    const allPlanets = evt.detail;
    console.log(allPlanets);
    this.populate(allPlanets);
  });

  this.element.addEventListener('click', (evt) => {
    const clickedValue = evt.target.id;
    console.log(clickedValue);
    PubSub.publish('ListView:click', clickedValue);
  });
};

ListView.prototype.populate = function(planetsData){
  planetsData.forEach((planet) => {
    const listItem = document.createElement('li');
    listItem.textContent = planet.name;
    listItem.id = planet.name;
    console.log(listItem.value);
    this.element.appendChild(listItem);
  });
};


module.exports = ListView;
