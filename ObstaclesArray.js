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
ObstaclesArray.prototype = Array.prototype;             //inherits from the default JS array object/class
ObstaclesArray.prototype.constructor = ObstaclesArray

function ObstaclesArray(){
    this.currentObstacleSpeed = 5;
    this.canvasElement = document.createElement('canvas')
    this.canvasElement.width = window.innerWidth
    this.canvasElement.height = window.innerHeight
    this.canvasElement.style.zIndex = "25"
    this.canvasElement.style.position = "absolute"
    this.canvasElement.style.left = "0"
    this.canvasElement.style.top = "0"
    document.body.appendChild(this.canvasElement)
    
    this.lastTargetedObjectTime = this.getSecondsSinceUnixEpoch()
    this.TARGETING_TIME = 5         //obstacles are allowed to target player every this many seconds
    
    this.opacity = 0
    
    this.isCheckingOdd = false          //only check has the obstacles for collision to save on C/GPU
                                        //at high framerates (ex. 60fps) this won't even be noticable
}


//clears all obstacles from the screen
ObstaclesArray.prototype.clear = function(){
    this.getContext().clearRect(0, 0, window.innerWidth, window.innerHeight)
}

//hides all the obstacles
ObstaclesArray.prototype.hideObstacles = function(){
    this.clear()
}

//shows all the obstacles
ObstaclesArray.prototype.showObstacles = function(){
    this.drawObstacles()
}

//speeds up the obstacles
ObstaclesArray.prototype.incrementSpeed = function(amount){
    this.currentObstacleSpeed += amount;
};

//animate the obstacles
ObstaclesArray.prototype.animateObstacles = function (thePlayer) {
    this.clearObstacles()
    var canAddMore = true;
    for (var i = 0; i < this.length; i++) {                  //update each obstacle in the array
        
        this[i].update();                                    //call update

        canAddMore = canAddMore && this[i].isSafeToAddMore;     //logical and to see if all are ready to add more obstacles

        if (this[i].isOffScreen) {                      //if obstacle is offscreen replace it -- keeps array from blowing up or having to delete indices
            this[i] = new Obstacle()
            this[i].setSpeed(this.currentObstacleSpeed);     //set the new obstacle to the current speed
            var currentTime = this.getSecondsSinceUnixEpoch()
            if((currentTime - this.lastTargetedObjectTime) > this.TARGETING_TIME){      //target the player if the specific time has passed - NO CAMPING
                console.log('targeting player')
                this[i].targetPlayer(thePlayer)
                this.lastTargetedObjectTime = this.getSecondsSinceUnixEpoch()
            }  
        }
    }
    if (canAddMore) {                                                //if we can add more, then add more (not quite off screen)
        var tempObstacle = new Obstacle()
        tempObstacle.setSpeed(this.currentObstacleSpeed)
        this.push(tempObstacle)
    }
    this.drawObstacles()
}


ObstaclesArray.prototype.getSecondsSinceUnixEpoch = function(){
    return Math.floor(Date.now() / 1000)
}


//fade the obstacles out
ObstaclesArray.prototype.fadeOut = function(){    
    this.clearObstacles()
    
    if(this.opacity > 0){
        for(var i = 0; i < this.length; i++){
            this.opacity = (this.opacity - 0.1)
            this.getContext().globalAlpha = this.opacity
            this.drawObstacles()
        }
        var that = this
        this.globalAnimationCancel = requestAnimationFrame(function(){ that.fadeOut() } );
    }
    else{
        cancelAnimationFrame(this.globalAnimationCancel);
        this.opacity = 0
        this.getContext().globalAlpha = this.opacity
    }
}


//fades the obstacles in
ObstaclesArray.prototype.fadeIn = function(){        
    this.clearObstacles()
    
    if(this.opacity < 1){
        for(var i = 0; i < this.length; i++){
            this.opacity = (this.opacity + 0.1)
            this.getContext().globalAlpha = this.opacity
            this.drawObstacles()
        }
        var that = this
        this.globalAnimationCancel = requestAnimationFrame(function(){ that.fadeIn() } );
    }
    else{
        cancelAnimationFrame(this.globalAnimationCancel);
        this.opacity = 1
        this.getContext().globalAlpha = this.opacity
    }
}

//clear the obstacles
ObstaclesArray.prototype.clearObstacles = function(){
    this.getContext().clearRect(0, 0, window.innerWidth, window.innerHeight)
}


//draw the obstacles
ObstaclesArray.prototype.drawObstacles = function(){
    var mainContext = this.getContext()
    for(var i = 0; i < this.length; i++){
        if(!this[i].isOffScreen){
            mainContext.fillStyle = this.FILL_COLOR
            this.getContext().drawImage(this[i].prerenderCanvas, this[i].xPosition, this[i].yPosition)
        }
    }
}


//gets the canvas context of the obstacles
ObstaclesArray.prototype.getContext = function(){
    return this.canvasElement.getContext("2d");
};



//checks if the player has collided with any obstacles
ObstaclesArray.prototype.isCollision = function (player) {
    //we only check half of the obstacles each time
    //at high frame rates this will barely be noticable 
    var i
    if(this.isCheckingOdd){
        i = 1
        this.isCheckingOdd = false
    }
    else {
        i = 0
        this.isCheckingOdd = true
    }
        
    for (i; i < this.length; i+=2) {
        if (this[i].isCollision(player)) { 
            return true
        }
    }
    return  false
}