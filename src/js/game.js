define('game', ['gameBoard'],
    function ( GameBoard ) {

        var Game = function(board){
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

        return Game;

    }
);