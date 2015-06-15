define('views/gameView', ['game', 'text!templates/gameView.htm'],
    function ( Game ) {

        var GameView = function(board){
            this.board = board;
        };

        Game.prototype = {

            start: function() {
                this.board = new GameBoard(10, 10);
            },

            getBoard: function(){
                return this.board;
            },

            startGame: function( livingCells ){
                if( this.board ){
                    this.board.nextGeneration( livingCells );
                }
            }
        };

        return GameView;

    }
);