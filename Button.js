"use strict"
function Button(text, nextScreen){
    this.text = text
    this.width
    this.height
    this.xPosition
    this.yPosition
    this.textXPosition
    this.textYPosition
    this.prerenderCanvas
    this.canvasElement
    this.buttonTransparency = 0.2
    this.textTransparency = 0.3
    this.fontColor = "white"
    this.fontType = "30px Arial"
    this.fillColor = "white"
    this.actionMethod
    this.nextScreen = nextScreen
    this.isMouseOver = false
    this.isMouseDown
    
    this.action

}

Button.prototype.prerender = function(){
    var context = this.prerenderCanvas.getContext("2d");
    
    context.textAlign = "center"
    context.globalAlpha = this.textTransparency
    context.globalAlpha = this.buttonTransparency
    context.fillStyle=this.fillColor;
    context.fillRect(this.xPosition, this.yPosition, this.width, this.height)
    
    
    context.fillStyle = this.fontColor
    context.font= this.fontType
    context.fillText(this.text, this.textXPosition, this.textYPosition);
}



Button.prototype.drawButton = function(){
this.getContext().textAlign = "center"
    this.getContext().globalAlpha = this.buttonTransparency
    this.getContext().fillStyle=this.fillColor;
    this.getContext().fillRect(this.xPosition, this.yPosition, this.width, this.height)
    
    this.getContext().globalAlpha = this.textTransparency
    this.getContext().fillStyle = this.fontColor
    this.getContext().font= this.fontType
this.getContext().textBaseline = 'middle';    
    this.getContext().fillText(this.text, this.textXPosition, this.textYPosition);
    

}

Button.prototype.getContext = function(){
    return this.canvasElement.getContext("2d");
} 

Button.prototype.clear = function(){
    this.getContext().clearRect(this.xPosition, this.yPosition, this.width, this.height+1)
}



Button.prototype.isInButtonBounds = function(mouseX, mouseY){
    var startX = this.xPosition
    var endX = this.xPosition + this.width
    var startY = this.yPosition
    var endY = this.yPosition + this.height
    if((mouseX > startX && mouseX < endX) && (mouseY > startY && mouseY < endY)){
        return true
        
    }
    return false
}


Button.prototype.mouseOverMode = function(){
    this.buttonTransparency = 0.3
    this.isMouseOver = true
    this.clear()
    this.drawButton()
}

Button.prototype.mouseOffMode = function(){
    this.buttonTransparency = 0.2
    this.isMouseOver = false
    this.clear()
    this.drawButton()
}

Button.prototype.mouseDownMode = function(){
//    this.buttonTransparency = 0.2
//    this.fillColor = "black"
//    this.isMouseDown = true
//    this.clear()
//    this.drawButton()
//    console.log('DOWN')
    if(this.action != undefined){    
        this.action()
    }
    
    
}