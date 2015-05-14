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
StartMenu.prototype = Menu.prototype
StartMenu.prototype.constructor = StartMenu


function StartMenu() {
    var TITLE_TEXT = "Ice Escape"
    var MENU_NAME = "startMenu"

    this.nextScreen = -1

    var tempButton
    var buttonsArray = []

    tempButton = new Button("play", GAME_SCREEN)
    buttonsArray.push(tempButton)

    tempButton = new Button("toggle music", START_SCREEN)
    tempButton.action = toggleSound
    buttonsArray.push(tempButton)

    tempButton = new Button("help/credits", HELP_SETTINGS_SCREEN)
    buttonsArray.push(tempButton)

    
    Menu.call(this, TITLE_TEXT, MENU_NAME, buttonsArray)

   
};