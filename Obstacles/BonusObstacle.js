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

//NOT YET IMPLEMENTED -- WILL IN LATER DEVELOPMENT
// BonusObject.prototype = GenericObstacle.prototype
// BonusObject.prototype.constructor = BonusObject

function BonusObject(){
    // console.log(new GenericObstacle())

    this.currentObstacleSpeed = 5;
    this.canvasElement = document.createElement('canvas')
    this.canvasElement.width = window.innerWidth
    this.canvasElement.height = window.innerHeight
//    this.canvasElement.style.zIndex = "25"
    this.canvasElement.style.position = "absolute"
    this.canvasElement.style.left = "0"
    this.canvasElement.style.top = "0"
    document.body.appendChild(this.canvasElement)
    
    
    this.width = 10
    this.height = 10
    this.prerenderCanvas = document.createElement('canvas')
    this.prerenderCanvas.width = this.width
    this.prerenderCanvas.height = this.height
    this.prerenderCanvas.style.position = "absolute"
    this.prerenderCanvas.style.left = "0"
    this.prerenderCanvas.style.top = "0"
    
    this.FILL_COLOR = 'black'
    
    
    this.isSafeToAddMore = false
    this.isOffScreen = false
    
    this.isHarmful = false
   
//    this.radius = 75
    this.yPosition = -this.height
    this.xPosition = this.getRandomXPosition()
//        console.log("XLOG\t"  + this.xPosition)
//    this.xPosition = 0
//    this.opacity = 0
    this.prerender()
}


BonusObject.prototype.prerender = function(){
//    var prerenderContext = this.canvasElement.getContext('2d')
//     prerenderContext.arc(this.y, this.radius,50,0,2*Math.PI);
    
    var leContext = this.prerenderCanvas.getContext('2d')
leContext.fillStyle = this.FILL_COLOR;
    leContext.fillRect(0, 0, this.width, this.height)
    
//         leContext.arc(500, 500,500,0,2*Math.PI);
    
//    this.getContext()
}

BonusObject.prototype.getRandomXPosition = function(){
    return Math.floor((Math.random() * window.innerWidth * 0.9) + 1)
}

BonusObject.prototype.draw = function(){


//    this.getContext().drawImage(this.prerenderCanvas, 0, 0)
//    cons
//    console.log(this.yPosition)
    this.getContext().drawImage(this.prerenderCanvas, this.xPosition, this.yPosition)
}

BonusObject.prototype.getContext = function(){
    return this.canvasElement.getContext("2d")
}

//checks for a collision with the player and the obstacle
BonusObject.prototype.isCollision = function (player){
    var playerTopY = player.userObjectYCoordinate
    var playerBottomY = player.getBottomPositionY()
    var yBottom = this.yPosition + this.height
    var xEnd = this.xPosition + this.width
    
    if(player.getRightPositionX() > this.xPosition){
        if(player.getLeftPositionX() < xEnd){
            if(playerTopY < yBottom){
                if(player.getBottomPositionY() > this.yPosition){
                    return true
                }
            }
        }
    }
    return false;
};


BonusObject.prototype.update = function(){
    // this.clear()
    // if(this.yPosition > (window.innerHeight * 0.2) && !this.isSafeToAddMore){

    // }

    this.yPosition = (this.yPosition + 1)
    if(this.yPosition > window.innerHeight){
        this.isOffScreen = true
    }
//console.log(this.yPosition)
    // this.draw()
}

BonusObject.prototype.isCollisionBonus = function(thePlayer){
    var x = thePlayer.userObjectXCoordinate
    var y = thePlayer.userObjectYCoordinate
    
    console.log("TEST\t" + (x > this.xPosition) + "," + (x + thePlayer.size*2 < this.xPosition + this.width))
    if(x > this.xPosition && x  < this.xPosition + this.width){
        if(y > this.yPosition && y < this.yPosition + this.height)
        
            alert("HOLY SHIT POINTS")

    }
    return false
}

BonusObject.prototype.reset = function(){
    
}

BonusObject.prototype.clear = function(){
    this.getContext().clearRect(this.xPosition, this.yPosition, this.width, this.height)
}