define('gameBoard', ['cell'],  function ( Cell ) {

        var GameBoard = function(rows, cols){
            this.rows = rows;
            this.cols = cols;
            this.cells = [];
            this.cubeSearchPattern = [
                {x: -1, y: -1, z: 0},
                {x: 0, y: -1, z: 0},
                {x: 1, y: -1, z: 0},
                {x: 1, y: 0, z: 0},
                {x: 1, y: 1, z: 0},
                {x: 0, y: 1, z: 0},
                {x: -1, y: 1, z: 0},
                {x: -1, y: 0, z: 0},
            ]
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

            getCellByCoordinates: function( coords ) {
                var foundCell, i, cell;
                for ( i = this.cells.length - 1; i >= 0; i-- ) {
                    cell = this.cells[i];
                    if ( JSON.stringify(cell.getCoordinates()) === JSON.stringify(coords) ) {
                        foundCell = cell;
                    }
                };
                return foundCell;
            },

            getNeighbors: function( cell ){
                var cellCoordinates = cell.getCoordinates();
                return this.applySearchPatter(this.cubeSearchPattern);
            },

            applySearchPatter: function(pattern) {
                
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