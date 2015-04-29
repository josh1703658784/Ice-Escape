"use strict"
PauseMenu.prototype = Menu.prototype
PauseMenu.prototype.constructor = PauseMenu


function PauseMenu(buttonsArray){
//    this.theGame = theGame
    var TITLE_TEXT = "Paused"
    var MENU_NAME = "pauseMenu"

    Menu.call(this, TITLE_TEXT, MENU_NAME, buttonsArray)
};


