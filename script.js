window.addEventListener("load", function() {

    let listedPlanets;
   //  // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
   //      Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
  
         let submitForm = this.document.querySelector("form");
         submitForm.addEventListener("submit", function(event) {
           const doc = window.document;
           const list = document.getElementById("faultyItems");
           list.style.visibility = 'hidden';
           const pilotName = document.querySelector("input[name=pilotName]");
           const copilotName = document.querySelector("input[name=copilotName]");
           const fuelLevel = document.querySelector("input[name=fuelLevel]");
           const cargoMass = document.querySelector("input[name=cargoMass]");
           
           if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === ""){
             alert("All Fields Are Required");
             
           }
           planet = pickPlanet(listedPlanets);
           addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image);
           formSubmission(doc, list, pilotName.value, copilotName.value, fuelLevel.value, cargoMass.value);
           event.preventDefault();
           
      });
    })
    
  });