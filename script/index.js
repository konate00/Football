"use strict";

// const footballTeam = document.getElementById('');
const footballTeam = document.getElementById('footballTeam');


window.onload = function () {
    const selectTeamBtn = document.getElementById('selectTeamBtn');
    selectTeamBtn.onclick = selectTeamBtnClicked;
    
    initFootballTeamsDropdown();
};

function selectTeamBtnClicked(){
    // Do smt with the selected value
    const footballP = document.getElementById('footballP');

    if(footballTeam.value == null) {
        footballP.textContent = 'Please select a team!';
    }
    else {
        let message = `${footballTeam.value} is selected.`;
        footballP.textContent = message;
    }
    

}
function initFootballTeamsDropdown() {


    let teams = [
        { code: "DAL", name: "Dallas Cowboys", plays: "Arlington, TX" },
        { code: "DEN", name: "Denver Broncos", plays: "Denver, CO" },
        { code: "HOU", name: "Houston Texans", plays: "Houston, TX" },
        { code: "KAN", name: "Kansas City Chiefs", plays: "Kansas City, MO" }
    ];

    
    for(let team of teams){
        let theOption = new Option(team.name, team.code); // new Option or .createElement
        footballTeam.appendChild(theOption);


    /* for (let i = 0; i < teams.length; i++){
        let theOption = new Option(teams[i].name, teams[i].code);
        footballTeam.appendChild(theOption);

    }

        for (let i=0; i < teams.lenght; i++){
            let team = teams[i];
            let theOption = new Option(teams.name, teams.code);
            footballTeam.appendChild(theOption);

        }
     */
    }




}


