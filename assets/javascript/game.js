$(document).ready(function () {

  // }

  // TODO

  //Player Selects a Fighter
  //Selected Fighter Moves to Div Your Character


  //Non selected Fighters move to Div Enemies Available to Attack
  //Player Selects enemy and they move into Div Defender

  //FIGHT SECTION GAME LOGIC
  //When player hits attack, it will do damage equal to char Damage
  //Defender will automatically attack back and HP will decrease
  //Player atk will increase every attack, defenders attack remains the same

//Once Defender HP = 0, they disappear and player picks another opponent to fight

  
console.log("hello")

//Global Variables


  var audio = new Audio("/assets/images/clockTower.mp3");

// Moving Characters Function

  $('body').on('click', '.cyclopsChar', function() {
    $('.cyclopsChar').appendTo('#chosenChar');
  })
  $('body').on('click', '.cableChar', function() {
    $('.cableChar').appendTo('#chosenChar');
  })
  $('body').on('click', '.jillChar', function() {
    $('.jillChar').appendTo('#chosenChar');
  })
  $('body').on('click', '.doomChar', function() {
    $('.doomChar').appendTo('#chosenChar');
  })





//AUDIO FUNCTION
  // audio.play();

//Character Information
var cyclops = {
  name: 'Cyclops',
  hp: 120,
  dmg: 10,
}
var cable = {
  name: "Cable",
  hp: 100,
  dmg: 10,
}

var Jill = {
  name: "Jill",
  hp: 120,
  dmg: 10,
}
var drDoom = {
  name: "DOctor Doom",
  hp: 120,
  dmg: 10,
}

//Character Select
$()

  //function End Game
  function endGame() {

  };

  //START GAME
  function StartGame() {
  };


  //Start the Game
  $('.titleScreen').on('click', StartGame);

});
//GAME LOGIC
