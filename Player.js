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

function Player(){
    this.speed = 5
    this.size = 10;                                         //user size -- maybe scale this 
    this.userObjectXCoordinate = Math.floor(window.innerWidth/2)        
	this.userObjectYCoordinate = Math.floor(window.innerHeight*0.8)      
    this.leftBound = 0;                                     //initially set bounds to window bounds
    this.rightBound = window.innerWidth;                    //initially set bounds to window bounds
//    this.PLAYER_COLOR = '#f5f5f5'             //grey
    this.PLAYER_COLOR = '#48325b'
    this.prerenderCanvas = document.createElement('canvas')
    this.canvasElement = document.createElement('canvas')
    this.topBound = 0
    this.bottomBound = window.innerHeight
    this.keysDown = {};
    this.opacity = 0

    this.totalWidth = 16
    this.totalHeight = 34
    
    var that = this
    
    //listens for player movement
    addEventListener("keydown", function (e) {
        that.keysDown[e.keyCode] = true;
    }, false);
    addEventListener("keyup", function (e) {
        delete that.keysDown[e.keyCode];
    }, false);

    
    this.initialize()
};

//sets up the player
Player.prototype.initialize = function(){
    this.canvasElement.width = window.innerWidth
    this.canvasElement.height = window.innerHeight
    this.canvasElement.style.zIndex = "2"
    this.canvasElement.style.position = "absolute"
    this.canvasElement.style.left = "0"
    this.canvasElement.style.top = "0"
    document.body.appendChild(this.canvasElement)

    
    this.prerender()    //prerenders the player
}


//fade the player out
Player.prototype.fadeOut = function(){
    this.clear()
    
    if(this.opacity > 0){
            this.opacity = (this.opacity - 0.1)
            this.getContext().globalAlpha = this.opacity
            this.drawPlayer()
//        }
        var that = this
        this.globalAnimationCancel = requestAnimationFrame(function(){ that.fadeOut() } );
    }
    else{
        cancelAnimationFrame(this.globalAnimationCancel);
        this.opacity = 0
        this.getContext().globalAlpha = this.opacity
    }
}

//fade the player in
Player.prototype.fadeIn = function(){
    this.clear()
    
    if(this.opacity < 1){
            this.opacity = (this.opacity + 0.1)
            this.getContext().globalAlpha = this.opacity
            this.drawPlayer()
//        }
        var that = this
        this.globalAnimationCancel = requestAnimationFrame(function(){ that.fadeIn() } );
    }
    else{
        cancelAnimationFrame(this.globalAnimationCancel);
        this.opacity = 1
        this.getContext().globalAlpha = this.opacity
        this.drawPlayer()
    }
}


//animate the player based on buttons pressed
Player.prototype.animatePlayer = function () {
    if (37 in this.keysDown) {                                           // Player holding left
        this.moveLeft();
    } 
    else if (39 in this.keysDown) {                                      // Player holding right
        this.moveRight();
    } 
    if (38 in this.keysDown) {                                           // Player holding left
        this.moveUp();
    } 
    else if (40 in this.keysDown) {                                      // Player holding right
        this.moveDown();
    }

}

//get the context of the player
Player.prototype.getContext = function(){
    return this.canvasElement.getContext("2d");
}


//how fast can the player move
Player.prototype.setSpeed = function(passedSpeed){
    this.speed = passedSpeed;
};

//prerender the player to an offscreen canvas
Player.prototype.prerender = function(){
    this.prerenderCanvas.width = this.totalWidth
    this.prerenderCanvas.height = this.totalHeight
//    this.prerenderCanvas.width = this.size*2
//    this.prerenderCanvas.height = this.size
    var ctx = this.prerenderCanvas.getContext('2d')

        var radius = 8
        var width = 16
        var xPos = 0
        var yPos = 0 + radius
        var xPosArc = xPos + radius
        var cargoRadius = Math.floor(radius /4)
        

        //the main ship square
        ctx.beginPath()
        {
            ctx.fillStyle = "black"
            ctx.fillRect(xPos,yPos,width, 25);
        }
        ctx.closePath()

        //the arc on the front of the ship
        ctx.beginPath()
        {
            ctx.fillStyle = "black"
            ctx.arc(xPosArc, yPos, radius, 0, Math.PI, true)
            ctx.fill()
        }
        ctx.closePath()
        
        //cargo in/on ship
        for(var i = 0; i < 3; i++){
            var cargoY = (yPos + radius/2) + (2.1*cargoRadius * i)
            for(var j = 0; j < 3; j++){
                var cargoX = (xPos + cargoRadius + 2) + (2.1*cargoRadius * j)
                ctx.beginPath()
                {
                    ctx.fillStyle = "#588894"
                    ctx.arc(cargoX,cargoY,cargoRadius,0,2*Math.PI)
                    ctx.fill()  
                }
                ctx.closePath()
            }
        }
        
        //control captain area thing in/on ship
        ctx.beginPath()
        {
            ctx.fillStyle = "#cecece"
            ctx.fillRect(xPos+2,yPos+19,width-4,5);
        }
        ctx.closePath()
};

//draw the player from the prerender
Player.prototype.drawPlayer = function(){
    
    var mainContext = this.getContext()
    mainContext.drawImage(this.prerenderCanvas, this.userObjectXCoordinate, this.userObjectYCoordinate)

};

//show the player
Player.prototype.showPlayer = function(){
    this.drawPlayer()
}

//hide the player
Player.prototype.hidePlayer = function(){
    this.clear()
}


//move player by specified direction and amount
Player.prototype.movePlayer = function(xChange, yChange){
    var mainContext = this.getContext();
    
    this.clear()
    if(!this.boundsAdjustment()){                                           //if the player isn't on the edge of bounds
        this.userObjectXCoordinate = this.userObjectXCoordinate + xChange;
        this.userObjectYCoordinate = this.userObjectYCoordinate + yChange;
    }
    this.drawPlayer()
};

Player.prototype.clear = function(){
    //without the leeway some artifacts fro the player wouldn't be wiped properly from the screen
    //because we only clear the location where the player is to save C/GPU cycles
    var startLeeway = 1
    var dimensionLeeway = startLeeway + 1
    this.getContext().clearRect(this.userObjectXCoordinate-startLeeway, this.userObjectYCoordinate-startLeeway, this.prerenderCanvas.width+dimensionLeeway, this.prerenderCanvas.height+dimensionLeeway)
}

//checks if the player is on a bounds edge
Player.prototype.boundsAdjustment = function(){
    if(this.getLeftPositionX() <= this.leftBound){                  //if player on left bound wrap to right bound
        this.recalculateXPositionFromRightSide(this.rightBound - 1)
        return true
    }
    else if(this.getRightPositionX() >= this.rightBound){           //if player on right bound wrap to left bound
        this.recalculateXPositionFromLeftSide(this.leftBound + 1);
        return true
    }
    else if(this.userObjectYCoordinate <= this.topBound){                //if player on top bound keep from moving further
        this.userObjectYCoordinate = this.topBound + 1
        return true
    }
    else if(this.getBottomPositionY() >= this.bottomBound){             //if player on bottom bound keep from moving further
        this.recalculateYPositionFromBottomSide(this.bottomBound - 1)   //player location is top left of bounding box it's in so
                                                                        //we need to calculate from bottom side
        return true
    }
    return false
};

//get the left x position of the player
Player.prototype.getLeftPositionX = function(){
    return this.userObjectXCoordinate;
};

//get the right x position of the player
Player.prototype.getRightPositionX = function(){
    return this.userObjectXCoordinate + this.prerenderCanvas.width
};

//get the bottom y position of the player
Player.prototype.getBottomPositionY = function(){
    return this.userObjectYCoordinate + this.prerenderCanvas.height
}

//get the top y position of the player
Player.prototype.getTopPositionY = function(){
    return this.userObjectYCoordinate
}

//player bounding box is top left -- this calculates position for player from bottom coordinates
Player.prototype.recalculateYPositionFromBottomSide = function(bottomY){
    this.userObjectYCoordinate = bottomY - this.prerenderCanvas.height
}


Player.prototype.recalculateXPositionFromLeftSide = function(leftX){
    this.userObjectXCoordinate = leftX;
};

//player bounding box is top left -- this calculates position for player from right coordinates
Player.prototype.recalculateXPositionFromRightSide = function(rightX){
    this.userObjectXCoordinate = rightX - this.size*2;
};

//move the player left
Player.prototype.moveLeft = function(){
    this.movePlayer(-this.speed, 0);
};

//move the player right
Player.prototype.moveRight = function(){
    this.movePlayer(this.speed, 0);
};

//move the player up
Player.prototype.moveUp = function(){
    this.movePlayer(0, -this.speed);
};

//move the player down
Player.prototype.moveDown = function(){
    this.movePlayer(0, this.speed);
};











