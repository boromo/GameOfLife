define('views/gameView', 
    
    ['views/baseView', 'jquery', 'game', 'text!templates/gameView.htm', 'views/gameBoardView'],
    
    function ( BaseView, $, Game, template, GameBoardView ) {
        'use strict';

        var GameView = BaseView.extend({

            init: function ( el ) {

                if ( !el ) {
                    throw "Game View could not be initialized without root element!";
                }
                else {
                    // initialize the view and render the template
                    this._super( el, template );
                }
            },

            renderChildren: function () {
                if ( this._super() ) {
                    var gameBoardView = new GameBoardView( $('#gameBoardView') );
                }
            }

        });

        return GameView;

    }
);