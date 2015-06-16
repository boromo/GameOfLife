define('views/gameBoardView', 
    
    ['views/baseView', 'jquery', 'text!templates/gameBoardView.htm'],
    
    function ( BaseView, $, template ) {
        'use strict';

        var GameBoardView = BaseView.extend({

            init: function ( el ) {

                if ( !el ) {
                    throw "Game board View could not be initialized without root element!";
                }
                else {
                    // initialize the view and render the template
                    this._super( el, template );
                }
            }
        });

        return GameBoardView;

    }
);