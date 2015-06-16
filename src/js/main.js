require.config({
    baseUrl: '/src/js',
    paths: {
        'bootstrap':        '../../bower_components/bootstrap/dist/js/bootstrap.min', 
        'underscore':       '../../bower_components/underscore/underscore-min',
        'jquery':           '../../bower_components/jquery/dist/jquery.min',
        'text':             'libs/require/text'
    },

    shim: {
        'jquery': {
            exports: '$'
        },

        'bootstrap': {
            deps : [ 'jquery' ]
        },

        'underscore': {
            exports: '_'
        },
    }
});

require(
    ["views/gameView", "underscore"],
    
    function(GameView){
        var root = $('#app');
        var gameView = new GameView(root);
    }
)