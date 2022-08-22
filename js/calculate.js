function getElementValueById (feildValue){
    const managerFeild = document.getElementById(feildValue);
    const managerFeildString = managerFeild.value;
    const manager = parseFloat(managerFeildString);
    managerFeild.value = "";
    return manager;
    
}

document.getElementById('calculate').addEventListener('click', function () {
    // const Player = getElementValueById('per-player');
    const Player = getElementValueById('per-player');
    const playerExpenses = document.getElementById('totall-expenses');
    let totalPlayers = playerNameArray.length * Player;
   
    playerExpenses.innerText = totalPlayers;

})

document.getElementById('calculate-total').addEventListener('click', function () {
    const manager = getElementValueById('manager-money');
    const coach = getElementValueById('coach-money');

    const totalMoneyExpenses = document.getElementById('totall-money');
    let totalMoney = manager + coach;
    totalMoneyExpenses.innerText = totalMoney;


})
 


// var players = 2;
// var budget = 2000;

// var totall = players * budget;
// console.log(totall);

// var manager = 200;
// var coach = 200;

// var toallelement = manager + coach;

// var totallcalculate = totall + toallelement;
// console.log(totallcalculate);



