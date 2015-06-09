define(['game', 'rules'], function(Game, Rules) {

    describe('Game', function() {

        var game = new Game();
        game.start();

        describe('Game board', function(){

            it('should have board', function() {
                expect(game.getBoard()).toBeDefined();
            });

            it('board should have 4 rows', function() {
                expect(game.getBoard().getRows()).toEqual(10);
            });

            it('board should have 5 columns', function() {
                expect(game.getBoard().getCols()).toEqual(10);
            });

        });

        describe('Rules', function() {

            var board = game.getBoard();
            var cell = board.getCellByCoordinates({x: 0, y: 1, z: 0});
            cell.setIsAlive(true);

            it('live cell with fewer than two live neighbours dies', function() {
                cell.neighbours = 1;
                expect( Rules.applyRules( cell ) ).toEqual( false );
            });

            it('live cell with two or three live neighbours lives on to the next generation', function() {
                cell.neighbours = 2;
                expect( Rules.applyRules( cell ) ).toEqual( true );
            });

            it('live cell with more than three live neighbours dies', function() {
                cell.neighbours = 4;
                expect( Rules.applyRules( cell ) ).toEqual( false );
            });

            it('dead cell with exactly three live neighbours becomes a live cell', function() {
                cell.setIsAlive(false);
                cell.neighbours = 3;
                expect( Rules.applyRules( cell ) ).toEqual( true );
            });

        });

    });

});
