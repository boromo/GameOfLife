define('cell',
    function () {
        var Cell = function(alive){
            this.isAlive = false;
            this.neighbors = 0;
            this.coordinates = {
                x: 0,
                y: 0,
                z: 0
            }
        }

        Cell.prototype = {

            getCoordinates: function(){
                return this.coordinates;
            },

            setCoordinates: function(coords){
                this.coordinates = coords;
            }
        }
        return Cell;
    }
);