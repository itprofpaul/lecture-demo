// The array starts with two games.
let games = ["Minecraft", "Stardew Valley", "Halo"];
games.push("GTA6");

// function 

function displayGames(){
    let result = "";

    for (let i = 0; i < games.length; i++){
    result += (i+1+ "." + games[i]+ "\n") 
    }
    document.getElementById("gameList").textContent = result;
    document.getElementById("count").textContent =
        "Total games: " + games.length;

}

function addGame() {
    let newGame = document.getElementById("gameInput").value.trim();

    if (newGame === "") {
        document.getElementById("message").textContent =
            "Enter a game first.";
        return;
    }

    games.push(newGame);
    document.getElementById("gameInput").value = "";
    document.getElementById("message").textContent = "Game added!";
    displayGames();
}

document.getElementById("addButton")
    .addEventListener("click", addGame);

displayGames();