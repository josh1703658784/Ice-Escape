"use strict"
ShareMenu.prototype = Menu.prototype
ShareMenu.prototype.constructor = ShareMenu


function ShareMenu(buttonsArray){
    var TITLE_TEXT = "Share"
    var MENU_NAME = "shareMenu"

    
    Menu.call(this, TITLE_TEXT, MENU_NAME, buttonsArray)


};