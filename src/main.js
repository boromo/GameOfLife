require.config({
    baseUrl: '/src',
    paths: {
        'underscore':       '../bower_components/underscore/underscore-min',
        'jquery':           '../bower_components/jquery/dist/jquery.min',
        'text':             'libs/require/text'
    },
});

require(["views/gameView"], 
    function(GameView){
        var gameView = new GameView();
    }
)