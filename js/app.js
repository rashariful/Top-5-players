const playerNameArray = [];

function addToDisplay(element){
    const PlayerName = element.parentNode.parentNode.children[0].innerText;
   const PlayerNameObj = {
    PlayerNm: PlayerName,
   }
   playerNameArray.push(PlayerNameObj);

    // document.getElementById('totall-players').innerText = playerNameArray.length;
    displayNamePlayers(playerNameArray);
  
}

function displayNamePlayers (displayPlayers){
    
    const tableBody = document.getElementById('table-body');
    tableBody.innerText= "";
   
    for (let i = 0; i < displayPlayers.length; i ++ ){
        const playerName = playerNameArray[i].PlayerNm;
        if(i >= 5){
            alert('Player Selection Full')
            return
        }

      

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <th>${i + 1}</th>
            <td>${playerName}</td>
            `;
        tableBody.appendChild(tr)

    }
}
