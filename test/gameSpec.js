define(['game'], function(Game) {

    describe('Game', function() {

        var game = new Game();
        game.start();

        beforeEach(function() {
        });

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

    });

});
