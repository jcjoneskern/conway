$(function() {
  var grid = [[0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0],
              [0, 0, 1, 1, 1],
              [0, 1, 1, 1, 0],
              [0, 0, 0, 0, 0]];

  //todo: fill the grid randomly
  //doesn't look like the sample animations on wikipedia...

  $("#button").on("click", function() {
    $("#grid").append("</br>");
    var newGrid = [[],[],[],[],[]];
    for (var j = 0; j < grid.length; j++) {
      for (var k = 0; k < grid[j].length; k++) {
        setVariables();
        i = grid[j][k];
        iteration(i, a, b, c, d);
        function iteration(i, a, b, c, d) {
          if (a+b+c+d < 2) { //dies with 0 or 1 living neighbors
            i = 0;
          } else if (i === 1 && a+b+c+d === 4) { //dies with 4 neighbors
            i = 0;
          } else if (i === 0 && a+b+c+d ===3) { //revives with 3 neighbors
            i = 1;
          } else {
            i = 1;
          }
          newGrid[j].push(i);
        }

      }
      $("#grid").append(grid[j]+"</br>");
    }
    grid = newGrid;
    //a = above i
    //b = right of i
    //c = below i
    //d = left of i
    function setVariables() {
      //define a
      if (grid[j-1]===undefined) {
        a = 0;
      } else {
        a = grid[j-1][k];
      }
      //define b
      if (grid[j][k+1]===undefined) {
        b = 0;
      } else {
        b = grid[j][k+1];
      }
      //define c
      if (grid[j+1]===undefined) {
        c = 0;
      } else {
        c = grid[j+1][k];
      }
      //define d
      if (grid[j][k-1]===undefined) {
        d = 0;
      } else {
        d = grid[j][k+-1];
      }
    }
  });

});
