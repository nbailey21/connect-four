function dropPiece(color, x, y){
  board[y][x] = color;
}

function toBottom(x, y){
  for(var i = 6; i > y; i--){
    if(board[i][x] === 0) {
      console.log(i);
      return i;
    }
  }
  console.log(i);
  return y;
}

function printBoard(){
  for(var y = 0; y <= 6; y++){
    for(var x = 0; x <= 6; x++){
      if(board[y][x] !== 0) {
        var cell = $('tr:eq(' + y + ')').find('td').eq(x);
        cell.children('button').addClass(board[y][x]);
      }
    }
  }
}

function spotTaken(x, y){
  if(board[y][x] !== 0){
    return true;
  };
}

function drawGame(){
  for(var y = 0; y <= 6; y++){
    for(var x = 0; x <= 6; x++){
      if (board[y][x] === 0){
        return false;
      }
    }
  }
  return true;
}

function horizontalWin(){
  var currentValue = null,
      previousValue = 0,
      count = 0;

  for (var y = 0; y <= 6; y++) {
      for (var x = 0; x <= 6; x++) {
          currentValue = board[y][x];
          if (currentValue === previousValue && currentValue !== 0) {
              count += 1;
          } else {
              count = 0;
          }
          if (count === 3) {
              return true;
          }
          previousValue = currentValue;
      }
      count = 0;
      previousValue = 0;
  }
  return false;
}

function verticalWin(){
  var currentValue = null,
      previousValue = 0,
      count = 0;

  for (var x = 0; x <= 6; x++) {
      for (var y = 0; y <= 6; y++) {
          currentValue = board[y][x];
          if (currentValue === previousValue && currentValue !== 0) {
              count += 1;
          } else {
              count = 0;
          }
          if (count === 3) {
              return true;
          }
          previousValue = currentValue;
      }
      count = 0;
      previousValue = 0;
  }
  return false;
}

function diagonalWin(){
  var  x = null,
       y = null,
       xtemp = null,
       ytemp = null,
       currentValue = null,
       previousValue = 0,
       count = 0;

 for (x = 0; x <= 6; x++) {
     xtemp = x;
     ytemp = 0;

     while (xtemp <= 6 && ytemp <= 6) {
       currentValue = board[ytemp][xtemp];
       if (currentValue === previousValue && currentValue !== 0) {
           count += 1;
       } else {
           count = 0;
       }
       if (count === 3) {
           return true;
       }
       previousValue = currentValue;
       xtemp++;
       ytemp++;
     }
     count = 0;
     previousValue = 0;
  }

  for (x = 0; x <= 6; x++) {
      xtemp = x;
      ytemp = 0;

      while (0 <= xtemp && ytemp <= 6) {
        currentValue = board[ytemp][xtemp];
        if (currentValue === previousValue && currentValue !== 0) {
            count += 1;
        } else {
            count = 0;
        }
        if (count === 3) {
            return true;
        }
        previousValue = currentValue;
          xtemp--;
          ytemp++;
      }
      count = 0;
      previousValue = 0;
   }

   for (y = 0; y <= 6; y++) {
       xtemp = 6;
       ytemp = y;

       while (0 <= xtemp && ytemp <= 6) {
         currentValue = board[ytemp][xtemp];
         if (currentValue === previousValue && currentValue !== 0) {
             count += 1;
         } else {
             count = 0;
         }
         if (count === 3) {
             return true;
         }
         previousValue = currentValue;
           xtemp--;
           ytemp++;
       }
       count = 0;
       previousValue = 0;
    }

    for (y = 0; y <= 6; y++) {
        xtemp = 0;
        ytemp = y;

        while (xtemp <= 6 && ytemp <= 6) {
          currentValue = board[ytemp][xtemp];
          if (currentValue === previousValue && currentValue !== 0) {
              count += 1;
          } else {
              count = 0;
          }
          if (count === 3) {
              return true;
          }
          previousValue = currentValue;
            xtemp++;
            ytemp++;
        }
        count = 0;
        previousValue = 0;
     }
     return false;
}

function changePlayers(){
  if(currentPlayer === 'black'){
    currentPlayer = 'red';
    $('.player').text(currentPlayer);
    $('.player').css('color', 'red');
  }
  else {
    currentPlayer = 'black';
    $('.player').text(currentPlayer);
    $('.player').css('color', 'black');
  };
}
