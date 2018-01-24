$(document).ready(function(e) {

  $('.board button').click(function(){
    var y = $('.board tr').index($(this).closest('tr'));
    var x = $(this).closest('tr').find('td').index($(this).closest('td'));

    y = toBottom(x, y);

    if (spotTaken(x, y) === true){
      alert("Spot Taken!");
      return;
    };

    dropPiece(currentPlayer, x, y);
    printBoard();

    if (horizontalWin() || verticalWin() || diagonalWin()) {
      var content = "The winner is " + currentPlayer +"!";
      alert(content);
      $('.board button').unbind('click');
      $('.play-again').show();
      return;
    };

    if (drawGame()) {
      alert("Game is a draw.");
      $('.play-again').show();
      return;
    };

    changePlayers();
  });

  $('.play-again').click(function(e){
    location.reload();
  });


});
