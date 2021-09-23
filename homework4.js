console.log('Pokemon')

// Create a getData function
const getData = async (season, <i class="fas fa-ruler-combined    "></i>) => {
    const searchURL = `http://ergast.com/api/f1/${season}/${<i class="fas fa-ruler-combined    "></i>}/driverStandings.json/`
    let response = await fetch(searchURL);
    return response.json();
}

// Create a loadData function

const loadData = async (e) => {
    e.preventDefault();
    console.log(e);

    const pokeSearch = e.target[1].value.toLowerCase();
    console.log(pokeSearch);

    const pokeData = await getData(pokeSearch);
    console.log(pokeData);

    createPokeHTML(pokeData);

}

const createPokeHTML = (pokemon) =>{
    const racerName = racer.name;
    const racerfamilyName = racer.familyName;
    const racerPosition = racer.Position;  
    const racerPoints = racer.Points;
    const racerPermanentNumber = racer.PermanentNumber;
    const racerCarMake = racer.CarMake;
    const racerDriverNationality = racer.DriverNationality;

    console.log(racerName, racerfamilyName, racerPosition, racerPoints, racerPermanentNumber, racerCarMake, racerDriverNationality);
    let pokeDisplay = document.getElementById('pokemonDisplay');
    
    // Display data in HTML
    let htmlName = document.createElement('h3');
    htmlName.innerHTML = 'First Name: ' + racerName.MRdata.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.givenName;
    racerDisplay.insertAdjacentElement('beforeend', htmlName);

    let htmlFamilyName = document.createElement('h3');
    htmlFamilyName.innerHTML = 'Family Name: ' + familyName.MRdata.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.familyName;
    racerDisplay.insertAdjacentElement('beforeend', htmlFamilyName);

    let htmlPosition = document.createElement('h3');
    htmlPosition.innerHTML = 'Position: ' + racerPosition.MRdata.StandingsTable.StandingsLists[0].DriverStandings[0].position;
    racerDisplay.insertAdjacentElement('beforeend', htmlPosition);

    let htmlPoints = document.createElement('h3');
    htmlPoints.innerHTML = 'Points: ' + racerPoints.MRdata.StandingsTable.StandingsLists[0].DriverStandings[0].points;
    racerDisplay.insertAdjacentElement('beforeend', htmlPoints);

    let htmlPermNum = document.createElement('h3');
    htmlPermNum.innerHTML = 'Permanent Number: ' + racerPermNum.MRdata.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.permanentNumber;
    racerDisplay.insertAdjacentElement('beforeend', htmlPermNum);

    let htmlConstructor = document.createElement('h3');
    htmlConstructor.innerHTML = 'Car Make: ' + racerConstructorId.MRdata.StandingsTable.StandingsLists[0].DriverStandings[0].DriverConstructors[0].constructorId;
    racerDisplay.insertAdjacentElement('beforeend', htmlConstructor);

    let htmlNationality = document.createElement('h3');
    htmlNationality.innerHTML = 'Driver Nationality: ' + racerNationality.MRdata.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.nationality;
    racerDisplay.insertAdjacentElement('beforeend', htmlNationality);

    let abilityList = document.createElement('ul');
    for (const a of racer.abilities){
        let htmlAbilities = document.createElement('li');
        console.log(a)
        htmlAbilities.innerHTML = a.ability.name;
        abilityList.insertAdjacentElement('beforeend', htmlAbilities);
    }
    pokeDisplay.insertAdjacentElement('beforeend', abilityList)
}

// Connect form to loadData function
const form = document.getElementById('pokeDataForm')
form.addEventListener('submit', loadData);

Constructors[0].constructorid