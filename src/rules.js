define( 'rules', function () {

        // 1.) Any live cell with fewer than two live neighbours dies, as if caused by under-population.
        // 2.) Any live cell with two or three live neighbours lives on to the next generation.
        // 3.) Any live cell with more than three live neighbours dies, as if by overcrowding.
        // 4.) Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

        var Rules = function() {}

        Rules.prototype = {

            /**
             * Method that applies Game of Life rules
             * @param  {Cell} cell to apply roules on
             * @return {boolean} returns true or false,
             * whether cell lives or dies in next generation 
             */
            applyRules: function ( cell ) {

                var lives = false;

                // Apply rules for living cells
                if ( cell.isAlive ){

                    if ( cell.neighbours < 2 ) {
                        lives = false;
                    }

                    if ( cell.neighbours === 2 || cell.neighbours === 3) {
                        lives = true;
                    }

                    if ( cell.neighbours > 3 ) {
                        lives = false;
                    }

                }
                // Apply rules for dead cell
                else {
                    if ( cell.neighbours === 3 ) {
                        lives = true;
                    }
                }

                return lives;

            }

        }

        return new Rules();

    }
);