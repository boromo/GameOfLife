define('views/baseView', 
    
    ['class', 'jquery'],
    
    function ( Class, $ ) {
        'use strict'

        var BaseView = Class.extend({

            template: null,
            el: null,

            init: function (el, template) {
                if ( template ) {
                    this.template = _.template( template );
                }

                if( el ) {
                    this.el = el;
                }

                this.render();
            },

            render: function () {
                if ( this.template !== null && this.el !== null ) {
                    if( typeof this.template === 'function' ) {
                        this.el.html( this.template() );
                    }
                }
                this.renderChildren();
            },

            renderChildren: function () {
                if ( !this.el ) {
                    return false;
                }
                return true;
            }

        });

        return BaseView;

    }
);