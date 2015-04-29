"use strict"
LostMenu.prototype = Menu.prototype
LostMenu.prototype.constructor = LostMenu


function LostMenu(buttonsArray) {
    var TITLE_TEXT = "You sunk!"
    var MENU_NAME = "lostMenu"

    Menu.call(this, TITLE_TEXT, MENU_NAME, buttonsArray)


};


LostMenu.prototype.writeScore = function(score){
    var yPos = this.getMenuTitleYPosition + 50
    var xPos = this.getMenuTitleXPosition
    var scoreString = " points"
//    alert(score)
    
    this.getContext().fillStyle = this.FONT_COLOR
    this.getContext().font = this.FONT_TYPE
    this.getContext().textAlign = this.MENU_TITLE_ALIGNMENT
//    alert(this.getContext())
     this.getContext().fillText('SOMETEXT', xPos, yPos)
}