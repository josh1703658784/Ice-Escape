function BonusObject(){
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
    
    this.FILL_COLOR = 'white'
    
    
    
    
    
   
//    this.radius = 75
    this.yPosition = 0
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


BonusObject.prototype.update = function(){
//    console.log("UPDATIN DAT SHIIIIT")
    this.clear()
    this.yPosition = (this.yPosition + 1)
//console.log(this.yPosition)
    this.draw()
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