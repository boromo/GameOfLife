/* Simple JavaScript Inheritance
 * By John Resig http://ejohn.org/
 * MIT Licensed.
 *
 * find more information howto use ehre http://ejohn.org/blog/simple-javascript-inheritance/
 *
 */
// Inspired by base2 and Prototype
define("class", function() {

    "use strict";

    var initializing = false,
        fnTest = /var xyz/.test(function() {
            var xyz;
        }) ? /\b_super\b/ : /.*/;

    /**
     * The base Class implementation (does nothing)
     * @class modk.Class
     * @abstract
     */
    function Class() {}

    /**
     * Create a new Class that inherits from this class
     * @memberOf modk.Class
     * @function
     * @static
     * @param {Object} prop Prototype to add to the new extended class.
     */
    Class.extend = function(prop) {/** @lends modk.Class.prototype */
        var _super = this.prototype;

        // Instantiate a base class (but only create the instance,
        // don't run the init constructor)
        initializing = true;
        var proto = new this();
        initializing = false;

        function overrideFunc(name, fn){
            return function() {
                var tmp = this._super;

                // Add a new ._super() method that is the same method
                // but on the super-class
                this._super = _super[name];

                // The method only need to be bound temporarily, so we
                // remove it when we're done executing
                var ret = fn.apply(this, arguments);
                this._super = tmp;

                return ret;
            };
        }

        // Copy the properties over onto the new prototype
        for (var name in prop) {
            // Check if we're overwriting an existing function
            proto[name] = typeof prop[name] === "function" &&
                typeof _super[name] == "function" && fnTest.test(prop[name]) ?
                overrideFunc(name, prop[name]) : prop[name];
        }

        // The dummy class constructor
        var newClass = function() {
            // All construction is actually done in the init method
            if (!initializing && this.init)
                this.init.apply(this, arguments);
        };

        // Populate our constructed prototype object
        newClass.prototype = proto;

        // Enforce the constructor to be what we expect
        proto.constructor = newClass;

        // And make this class extendable
        newClass.extend = Class.extend;

        return newClass;
    };

    return Class;

});
