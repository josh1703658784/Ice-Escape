"use strict"
HelpSettingsMenu.prototype = Menu.prototype
HelpSettingsMenu.prototype.constructor = HelpSettingsMenu


function HelpSettingsMenu(buttonsArray, toggleSound){
    var TITLE_TEXT = "Help/Settings/Credits"
    var ACTION_TEXT = "play"
    var MENU_NAME = "helpSettings"
    this.nextScreen = -1
    
    
 

    Menu.call(this, TITLE_TEXT, MENU_NAME, buttonsArray)
    



};