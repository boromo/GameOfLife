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
                return this.applySearchPatter(cell, this.cubeSearchPattern);
            },

            applySearchPatter: function( cell, pattern ) {
                var matchedCells = [], j, patternItem;

                for ( j = 0; j < pattern.length; j++ ) {
                    patternItem = pattern[j];

                    var cellExists = this.checkIfCellExists(cell, patternItem);
                    if ( cellExists !== false ) {
                        matchedCells.push( this.getCellByCoordinates( cellExists) );
                    }
                }

                return matchedCells;
            },

            checkIfCellExists: function ( cell, patternItem ){
                var exists = true;
                var foundCell = {};
                var cellCoordinates = cell.getCoordinates();

                for ( var key in cellCoordinates ) {
                    // check if coordinates going in minus value
                    if ( ( cellCoordinates[key] + patternItem[key] ) < 0 ) {
                        // not exists
                        exists = false;
                    }
                    // check if coordinates out of x bounds
                    if ( key === "x" && ( cellCoordinates[key] + patternItem[key] ) > this.cols - 1 ){
                        exists = false;
                    }
                    // check id coordinates ot of y bounds
                    if ( key === "y" && ( cellCoordinates[key] + patternItem[key] ) > this.rows - 1 ) {
                        exists = false;
                    }

                    // even though the cell might be invalid, save it in array anyways
                    foundCell[key] = cellCoordinates[key] + patternItem[key];

                }

                if ( exists ) {
                    // return cell only if exists flag is true
                    return foundCell;
                }
                else {
                    return false
                }

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