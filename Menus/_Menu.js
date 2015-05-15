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
function Menu(TITLE_TEXT, MENU_NAME, buttons) {
    this.FONT_COLOR = StaticSettings.menuFontColor
    this.FONT_TYPE = StaticSettings.menuFontType
    this.TITLE = TITLE_TEXT

    this.FONT_TRANSPARENCY = StaticSettings.menuFontTransparency
    this.BUTTON_TRANSPARENCY = StaticSettings.buttonTransparency

    this.MENU_TITLE_ALIGNMENT = StaticSettings.menuTitleAlignment
    this.BLUR_AMOUNT = 180
//    this.background = theBackground
    this.nextScreen
    this.areEventsListenersOn = false
    this.buttonsArray = []
    this.buttonsArray = buttons
    this.globalAnimationCancel
   
    this.opacity = 0
    
    this.x = 0
    this.y = 0
    
    this.zIndex = "2"
    
    this.prerenderCanvas = document.createElement('canvas')    
    this.canvasElement = document.createElement('canvas')

    this.prerender()

}


Menu.prototype.toggleEventListeners = function(aBool){
    if(aBool){
        this.canvasElement.addEventListener("mousedown", getDownPosition, false);
        this.canvasElement.addEventListener("click", getClickPosition, false);
        this.canvasElement.addEventListener('mousemove', getMovePosition, false);
        this.areEventsListenersOn = true
    }
    else{
        this.canvasElement.removeEventListener("mousedown", getDownPosition);
        this.canvasElement.removeEventListener("click", getClickPosition);
        this.canvasElement.removeEventListener("mousemove", getMovePosition);
        this.areEventsListenersOn = false
    }
    var that = this;
    

    function getDownPosition(event) {
        event.stopImmediatePropagation()
        that.checkDown(getPosition(event))
    }

    function getClickPosition(event) {
        event.stopImmediatePropagation()
        that.checkClick(getPosition(event))
    }


    

    function getMovePosition(event) {
        event.stopImmediatePropagation()
        that.checkMouseover(getPosition(event))
    }

    function getPosition(event) {
        event.stopImmediatePropagation()
        var x
        var y
        if (event.offsetX) {
            x = event.offsetX
            y = event.offsetY
        } else if (event.layerX) {
            x = event.layerX
            y = event.layerY
        } else if (event.x) {
            x = event.x
            y = event.y
        } else {
            console.log('Cannot track mouse in this browser - try a recent version of Firefox')
        }
        return [x, y]
    }

}


Menu.prototype.fadeOut = function(){
    this.toggleEventListeners(false)
    this.clear()
    var context = this.getContext()

    if(this.opacity > 0){
//        console.log('fading out\t' + this.opacity)
        this.opacity = (this.opacity - 0.1)
        context.globalAlpha = this.opacity

        var that = this
        this.globalAnimationCancel = requestAnimationFrame(function(){ that.fadeOut() } );
    }
    else{
//        console.log("OUT STOP")
        cancelAnimationFrame(this.globalAnimationCancel);
        this.opacity = 0
        context.globalAlpha = this.opacity
        this.canvasElement.parentNode.removeChild(this.canvasElement);
    }
    this.drawMenu()
}

Menu.prototype.fadeIn = function(){
    console.log("see Menu:106")    //without this console log the fade in doesn't always work right -- this forces it to happen
    this.clear()
    var context = this.getContext()

    if(this.opacity < 1){
//        console.log('fading in\t' + this.opacity)
        this.opacity = (this.opacity + 0.1)
        context.globalAlpha = this.opacity
//        this.drawMenu()

        var that = this
        this.globalAnimationCancel = requestAnimationFrame(function(){ that.fadeIn() } );
    }
    else{
//        console.log("IN STOP")
        cancelAnimationFrame(this.globalAnimationCancel);
        this.opacity = 1
        context.globalAlpha = this.opacity
        document.body.appendChild(this.canvasElement)
        this.initialize()
        
        
        this.toggleEventListeners(true)
    }
    this.drawMenu()
}


Menu.prototype.hide = function(){
    this.toggleEventListeners(false)
    this.clear()
    this.canvasElement.parentNode.removeChild(this.canvasElement);å
}

Menu.prototype.show = function(){
    document.body.appendChild(this.canvasElement)
    this.initialize()
    this.drawMenu()
    this.toggleEventListeners(true)
}

Menu.prototype.initialize = function () {
    this.canvasElement.width = window.innerWidth
    this.canvasElement.height = window.innerHeight
    this.canvasElement.style.zIndex = "100"
    this.canvasElement.style.position = "absolute"
    this.canvasElement.style.left = "0"
    this.canvasElement.style.top = "0"
}


Menu.prototype.prerender = function(){
    this.prerenderCanvas.width = window.innerWidth
    this.prerenderCanvas.height = window.innerHeight
    this.prerenderCanvas.style.position = "absolute"
    this.prerenderCanvas.style.left = "0"
    this.prerenderCanvas.style.top = "0"

    var prerenderContext = this.prerenderCanvas.getContext('2d')

    prerenderContext.fillStyle = this.FONT_COLOR
    prerenderContext.font = this.FONT_TYPE
    prerenderContext.textAlign = this.MENU_TITLE_ALIGNMENT
    prerenderContext.fillText(this.TITLE, this.getMenuTitleXPosition(), this.getMenuTitleYPosition())

    var spacing = this.getMenuTitleYPosition()
    var heightRoom = window.innerHeight - spacing
    var buttonHeight = Math.floor(heightRoom / (this.buttonsArray.length * 2))


    prerenderContext.textAlign = this.MENU_TITLE_ALIGNMENT  
    prerenderContext.textBaseline = 'middle';    
    for (var i = 0; i < this.buttonsArray.length; i++) {
        this.buttonsArray[i].yPosition = Math.floor((1.5 * spacing) + (buttonHeight * i * 1.5))
        this.buttonsArray[i].prerenderCanvas = this.prerenderCanvas
        this.buttonsArray[i].canvasElement = this.canvasElement
        this.buttonsArray[i].xPosition = 0
        this.buttonsArray[i].width = window.innerWidth
        this.buttonsArray[i].height = buttonHeight
        this.buttonsArray[i].textXPosition = Math.floor(window.innerWidth / 2)
        this.buttonsArray[i].textYPosition = (Math.floor(1.5 * spacing) + (buttonHeight * i * 1.5) + (buttonHeight / 2))
//        context.measureText(scoreText).height + 10
        this.buttonsArray[i].prerender()
    }
    
}


Menu.prototype.checkMouseover = function (point) {
    var x = point[0]
    var y = point[1]
    for (var i = 0; i < this.buttonsArray.length; i++) {
        var currentButton = this.buttonsArray[i]
        if (currentButton.isInButtonBounds(x, y) && !currentButton.isMouseOver) {
            currentButton.mouseOverMode()
        } else if (!currentButton.isInButtonBounds(x, y) && currentButton.isMouseOver) {
            currentButton.mouseOffMode()
        }

    }
}


Menu.prototype.checkClick = function (point) {
    var x = point[0]
    var y = point[1]
    for (var i = 0; i < this.buttonsArray.length; i++) {
        var currentButton = this.buttonsArray[i]
        if (currentButton.isInButtonBounds(x, y)) {
            currentButton.mouseOffMode()
            this.isDone = true
            this.nextScreen = currentButton.nextScreen
        }
    }

}



Menu.prototype.checkDown = function (point) {
    var x = point[0]
    var y = point[1]
    for (var i = 0; i < this.buttonsArray.length; i++) {
        var currentButton = this.buttonsArray[i]
        if (currentButton.isInButtonBounds(x, y)) {
            currentButton.mouseDownMode()
        }
    }

}

Menu.prototype.drawMenu = function(){
        
    var mainContext = this.getContext()
//    this.background.showBackground()
    mainContext.globalAlpha = this.opacity
    mainContext.drawImage(this.prerenderCanvas, this.x, this.y)
}




Menu.prototype.clear = function () {
    this.getContext().clearRect(0, 0, window.innerWidth, window.innerHeight)
}




Menu.prototype.getMenuTitleXPosition = function () {
    return Math.floor(window.innerWidth / 2)
}


Menu.prototype.getMenuTitleYPosition = function () {
    return Math.floor(window.innerWidth / 20)
}



Menu.prototype.getContext = function () {
    return this.canvasElement.getContext("2d");
}