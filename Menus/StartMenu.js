"use strict"
StartMenu.prototype = Menu.prototype
StartMenu.prototype.constructor = StartMenu


function StartMenu(buttonsArray) {
    var TITLE_TEXT = "Ice Escape"
    var MENU_NAME = "startMenu"

    this.nextScreen = -1

    
    Menu.call(this, TITLE_TEXT, MENU_NAME, buttonsArray)

   
};