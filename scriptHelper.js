// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {

  let missionDiv = document.getElementById("missionTarget");

  let divHeader = document.createElement("h2");
  let divOrderedList = document.createElement("ol");
  let listItem = document.createElement("li");
  let listItem2 = document.createElement("li");
  let listItem3 = document.createElement("li");
  let listItem4 = document.createElement("li");
  let listItem5 = document.createElement("li");

  let divImage = document.createElement("img");

  missionDiv.appendChild(divHeader);
  divHeader.innerText = "Mission Destination";
  divHeader.appendChild(divOrderedList);
  listItem.innerText = `Name: ${name}`;
  divOrderedList.appendChild(listItem);
  listItem2.innerText = `Diameter: ${diameter}`;
  divOrderedList.appendChild(listItem2);
  listItem3.innerText = `Star: ${star}`;
  divOrderedList.appendChild(listItem3);
  listItem4.innerText = `Distance from Earth: ${distance}`;
  divOrderedList.appendChild(listItem4);
  listItem5.innerText = `Number of Moons: ${moons}`;
  divOrderedList.appendChild(listItem5);
  divImage.src = imageUrl;
  divOrderedList.appendChild(divImage);
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
   if (testInput === "" || testInput === null || testInput === undefined){
    return  "Empty"
   } else if ((!isNaN(testInput))){
     return "Is a Number"
   } else if (isNaN(testInput)) {
     return "Not a Number"
   }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  let listPilot = document.getElementById("pilotStatus");
  let listCopilot = document.getElementById("copilotStatus");
  let fuelStatus = document.getElementById("fuelStatus");
  let launchStatus = document.getElementById("launchStatus");
  let cargoStatus = document.getElementById("cargoStatus")
  
   if (validateInput(pilot) === "Empty" || validateInput(pilot) === "Is a Number"){
     alert("Pilot must be a word or letters")
   }
   if (validateInput(copilot) === "Empty" || validateInput(copilot) === "Is a Number"){
    alert("CoPilot must be a word or letters")
  }
  if (validateInput(fuelLevel) === "Empty" || validateInput(fuelLevel) === "Not a Number"){
    alert("FuelLevel must be a number")
  }
  if (validateInput(cargoLevel) === "Empty" || validateInput(cargoLevel) === "Not a Number"){
    alert("CargoLevel must be a number")
  }
  
  listPilot.innerHTML = `Pilot ${pilot} is ready for launch`;
  listCopilot.innerHTML = `Co-pilot ${copilot} is ready for launch`;

  if (fuelLevel >= 10000 && cargoLevel <= 10000){
    launchStatus.innerHTML = "Shuttle is Ready for Launch";
    launchStatus.style.color = "rgb(65, 159, 106)";
    list.style.visibility = 'hidden';
  }
  if (fuelLevel < 10000){
    fuelStatus.innerHTML = "Fuel level too low for launch";
    launchStatus.innerHTML = "Shuttle Not Ready for Launch";
    launchStatus.style.color = "rgb(199, 37, 78)";
    list.style.visibility = 'visible';
  }
  if (cargoLevel > 10000){
    cargoStatus.innerHTML = "Cargo mass too heavy for launch";
    launchStatus.innerHTML = "Shuttle Not Ready for Launch";
    launchStatus.style.color = "rgb(199, 37, 78)";
    list.style.visibility = 'visible';
  }
  

}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
      return response.json()});

    return planetsReturned;
}

function pickPlanet(planets) {
  let planetIndex = Math.floor(Math.random() * planets.length)
  return planets[planetIndex];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
