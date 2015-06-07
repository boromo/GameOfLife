define('gameBoard', ['cell'],  function ( Cell ) {

        var GameBoard = function(rows, cols){
            this.rows = rows;
            this.cols = cols;
            this.cells = [];
            this.init();
        };

        GameBoard.prototype = {

            init: function() {
                var i, j, cell, coordinates;
                for(i = 0; i < this.cols; i++){
                    for(j = 0; j < this.rows; j++){
                        coordinates = {x: i, y: j, z: 0}
                        cell = new Cell( false );
                        cell.setCoordinates(coordinates);
                        this.cells.push(cell);
                    }
                }
            },

            addCell: function( cell ) {
                this.cells.push( cell );
            },

            getCellByIndex: function( idx ){
                return this.cells[idx];
            },

            nextGeneration: function( livingCells ){
                this.cells = livingCells;
            },

            getRows: function(){
                return this.rows;
            },

            getCols: function(){
                return this.cols;
            }
        };

        return GameBoard;

    }
);