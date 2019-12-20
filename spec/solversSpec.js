describe('solvers', function() {
  window.displayBoard = function() {};

  describe('findNRooksSolution()', function() {

    it('finds a valid solution for n of 1-8', function() {
      _.range(1, 9).map(function(n) {
        var solutionBoard = new Board(findNRooksSolution(n));
        var numPieces = _.reduce(solutionBoard.rows(), function(memo, row) {
          return memo + _.reduce(row, function(memo, col) {
            return memo + col;
          }, 0);
        }, 0);

        expect(solutionBoard.get('n')).to.equal(n);
        expect(numPieces).to.equal(n);
        expect(solutionBoard.hasAnyRooksConflicts()).to.be.equal(false);
      });
    });

  });

  describe('countNRooksSolutions()', function() {

    it('finds the number of valid solutions for n of 1-8', function() {
      _.range(1, 9).map(function(n) {
        var solutionCount = countNRooksSolutions(n);
        var expectedSolutionCount = [1, 1, 2, 6, 24, 120, 720, 5040, 40320][n];

        expect(solutionCount).to.be.equal(expectedSolutionCount);
      });
    });

  });

  describe('findNQueensSolution()', function() {

    it('finds a valid solution for n of 0-7', function() {
      // Skip 2 and 3 because they have no solution.
      [0, 1, 4, 5, 6, 7, 8].map(function(n) {
        var solutionBoard = new Board(findNQueensSolution(n));
        var numPieces = _.reduce(solutionBoard.rows(), function(memo, row) {
          return memo + _.reduce(row, function(memo, col) {
            return memo + col;
          }, 0);
        }, 0);

        expect(solutionBoard.get('n')).to.equal(n);
        expect(numPieces).to.equal(n);
        expect(solutionBoard.hasAnyQueensConflicts()).to.be.equal(false);
      });

      // Check 2 and 3 for no solution
      [2, 3].map(function (n) {
        var solutionBoard = new Board(findNQueensSolution(n));
        var numPieces = _.reduce(solutionBoard.rows(), function(memo, row) {
          return memo + _.reduce(row, function(memo, col) {
            return memo + col;
          }, 0);
        }, 0);

        expect(numPieces).to.equal(0);
        expect(solutionBoard.get('n')).to.equal(n);
      });
    });

  });

  describe('countNQueensSolutions()', function() {

    it('finds the number of valid solutions for n of 0-8', function() {
      _.range(0, 9).map(function(n) {
        var solutionCount = countNQueensSolutions(n);
        var expectedSolutionCount = [1, 1, 0, 0, 2, 10, 4, 40, 92][n];

        expect(solutionCount).to.be.equal(expectedSolutionCount);
      });
    });

  });

});


                      results = [];
                      make different cases where 1 is at each position in the first row
                      for loop to add a one on space i
                      var pushBoards = function() {
                        for (var i = 0; i < n; i++) {
                          var tempBoard = new Board({n: n});
                          tempBoard.get(0).splice(i, 1, 1);
                          //push to results Array
                          results.push(tempBoard.rows());
                          //push to childrenArray
                          board.children.push(tempBoard);

                        }


                      var row = 0;
                      var col = 0;

                      var findSol = function(board) {
                        // board.togglePiece(row, col);
                        // col++;
                        // board.togglePiece(row, col);
                        for (var col = 0; col < n; col++) {

                          if (!board.hasRowConflictAt(row) || !board.hasColConflict(col)) {
                            board.togglePiece(row, col);
                            row++;
                            col = 0;
                            findSol(board);
                          } else {
                            row--;
                            board.togglePiece(row, col);
                            col++;
                            board.togglePiece(row, col);
                            row++;
                            col = 0;
                          }
                        }
