var players = [
    {name: "Lionel Messi", club: "FC Barcelona"},
    {name: "Christiano Ronaldo", club: "Real Madrid"},
    {name: "Luis Suarez", club: "FC Barcelona"},
    {name: "Gareth Bale", club: "Real Madrid"},
    {name: "Manuel Neuer", club: "FC Bayern Munchen"}
]

//filter the object that contains club=FC Barcelona using .filter method

//an argument "player" is pass through this function in order for it 
//to properly call the club property

var barcePlayers = players.filter(function(player) {
    return player.club === 'FC Barcelona';
});

//listing all the names of players using .forEach method **make sure camelCase here
players.forEach(function(player){
  console.log(player.name);
});

//returning a new array with the output of the function applying to each item of original array
var names = players.map(function(player){
  return player.name;
});

console.log(names);
