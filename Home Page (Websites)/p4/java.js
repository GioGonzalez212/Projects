$(function () {
  var player = 1;
  var table = $("table");
  var messages = $(".messages");
  var turn = $(".turn");                    //Function calls, descriptions are below
  displayNextPlayer(turn, player);

  $("td").click(function () {
    td = $(this);
    var state = getState(td);
    if (!state) {
      var pattern = definePatternForCurrentPlayer(player);
      changeState(td, pattern);
      if (checkIfPlayerWon(table, pattern)) {
        messages.html("Player " + player + " Has Won Congratulations! Press the Reset Box to Start Again.");
        turn.html("");
      } else {
        player = setNextPlayer(player);
        displayNextPlayer(turn, player);
      }
    } else {
      messages.html("This box is already checked.");
    }
  });

  $(".reset").click(function () {
    player = 1;
    messages.html("");
    reset(table);
    displayNextPlayer(turn, player);
  });
});

//Checks the state of the table through the element of 'td' and returns a value.
function getState(td) {
  if (td.hasClass("cross") || td.hasClass("circle")) {
    return 1;
  } else {
    return 0;
  }
}

//Updates the state of 'td' throughout the function
function changeState(td, pattern) {
  return td.addClass(pattern);
}

//Defines what type of symbol the player is using.
function definePatternForCurrentPlayer(player) {
  if (player == 1) {
    return "cross";
  } else {
    return "circle";
  }
}

//Determines the player who goes next.
function setNextPlayer(player) {
  if (player == 1) {
    return (player = 2);
  } else {
    return (player = 1);
  }
}

//Displays the next player
function displayNextPlayer(turn, player) {
  turn.html("Player turn : " + player);
}

//All if else statements are the conditions neccesary for winning the game.
function checkIfPlayerWon(table, pattern) {
  var won = 0;
  if (
    table.find(".item1").hasClass(pattern) &&
    table.find(".item2").hasClass(pattern) &&
    table.find(".item3").hasClass(pattern)
  ) {
    won = 1;
  } else if (
    table.find(".item1").hasClass(pattern) &&
    table.find(".item4").hasClass(pattern) &&
    table.find(".item7").hasClass(pattern)
  ) {
    won = 1;
  } else if (
    table.find(".item1").hasClass(pattern) &&
    table.find(".item5").hasClass(pattern) &&
    table.find(".item9").hasClass(pattern)
  ) {
    won = 1;
  } else if (
    table.find(".item4").hasClass(pattern) &&
    table.find(".item5").hasClass(pattern) &&
    table.find(".item6").hasClass(pattern)
  ) {
    won = 1;
  } else if (
    table.find(".item7").hasClass(pattern) &&
    table.find(".item8").hasClass(pattern) &&
    table.find(".item9").hasClass(pattern)
  ) {
    won = 1;
  } else if (
    table.find(".item2").hasClass(pattern) &&
    table.find(".item5").hasClass(pattern) &&
    table.find(".item8").hasClass(pattern)
  ) {
    won = 1;
  } else if (
    table.find(".item3").hasClass(pattern) &&
    table.find(".item6").hasClass(pattern) &&
    table.find(".item9").hasClass(pattern)
  ) {
    won = 1;
  } else if (
    table.find(".item3").hasClass(pattern) &&
    table.find(".item5").hasClass(pattern) &&
    table.find(".item7").hasClass(pattern)
  ) {
    won = 1;
  }
  return won;
}

//Resets the game board
function reset(table) {
  table.find("td").each(function () {
    $(this).removeClass("circle").removeClass("cross");
  });
}
