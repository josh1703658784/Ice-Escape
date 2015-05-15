//<!--JOSHUA SARVER-->
//<!--COPYRIGHT 05/05/15-->
//<!--CPSC 217 FINAL PROJECT-->
//<!--SPRING 2015-->
//
//<!--THIS IS AN INTERACTIVE GAME TO SATISFY THE REQUIREMENTS OF THE ASSIGNMENT-->
//<!--EVERYTHING IS DRAWN AND ANIMATED WITH CANVAS VIA JAVASCRIPT-->
//
//<!--OBJECTS WERE POINTLESS IN SOME CASES AS IS SOME OF THE INHERITANCE (LIKE WITH THE MENUS) -->
//<!--    BUT IT WAS A GOOD WAY TO LEARN ADVANCED JAVASCRIPT AND-->
//<!--    IT MAKES THE CODE REALLY NICE AND MODULAR FOR FUTURE DEVELOPMENT-->
//
//<!--YOU'LL NOTICE SOME MODULES ARE INCOMPLETE AS I INTEND TO CONTINUE THIS PROJECT AFTER THE CLASS-->
//<!--FOR EXAMPLE: I'D LIKE TO ADD OBJECTS TO AVOID AND OBJECTS TO HELP THE PLAYER LEVEL UP-->
//<!--USING A RANDOM N-GON ALGORITHM TO GENERATE ICEBERGS WOULD BE NEAT, ALSO-->






"use strict"
HelpSettingsMenu.prototype = Menu.prototype
HelpSettingsMenu.prototype.constructor = HelpSettingsMenu

function HelpSettingsMenu(){
    var TITLE_TEXT = "Help/Settings/Credits"
    var ACTION_TEXT = "play"
    var MENU_NAME = "helpSettings"
    this.nextScreen = -1


   	var buttonsArray = []
    
    var tempButton = new Button("Avoid the ice-bergs at all costs!", HELP_SETTINGS_SCREEN)
    tempButton.isInButtonBounds = function(){return false}
    buttonsArray.push(tempButton)
    
    var tempButton = new Button("arrow keys navigate / p pauses / edges wrap-around.", HELP_SETTINGS_SCREEN)
    tempButton.isInButtonBounds = function(){return false}
    buttonsArray.push(tempButton)

    var tempButton = new Button("awesome blur from quasimondo.com / audio APIs from buzz.jaysalvat.com", HELP_SETTINGS_SCREEN)
    tempButton.isInButtonBounds = function(){return false}
    buttonsArray.push(tempButton)
    
    var tempButton = new Button("made by Joshua Sarver with pure love, Javascript, and HTML5 Canvas", HELP_SETTINGS_SCREEN)
    tempButton.isInButtonBounds = function(){return false}
    buttonsArray.push(tempButton)
    
    
    var tempButton = new Button("back", START_SCREEN)
    buttonsArray.push(tempButton)
        
    
    Menu.call(this, TITLE_TEXT, MENU_NAME, buttonsArray)
};
