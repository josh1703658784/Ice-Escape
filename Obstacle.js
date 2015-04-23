
function Obstacle(){
    this.MAX_WIDTH_PERCENT = 0.2
    this.MAX_HEIGHT_PERCENT = 0.4
    this.width = Math.floor((Math.random() * window.innerWidth * this.MAX_WIDTH_PERCENT) + 1);
    this.height = Math.floor((Math.random() * window.innerHeight * this.MAX_HEIGHT_PERCENT) + 1);       

    this.xPosition = this.getRandomXPosition()
    this.yPosition = -this.height; // * -1; - check this, see comment below

    this.isOffScreen = false;           //is the obstacle off screen
    this.isSafeToAddMore = false;       //is the obstacle far enough down screen we can add more to the array this is in
    
    this.FILL_COLOR = '#009933'

    this.speed = 0;
    
    this.prerenderCanvas = document.createElement('canvas')
    
    this.prerender()
    };  


//if targeting the player move the obstacle right over top of the player
Obstacle.prototype.targetPlayer = function(thePlayer){
    this.xPosition = thePlayer.userObjectXCoordinate - (this.width/2)
}

//get a random x position of the obstacle
Obstacle.prototype.getRandomXPosition = function(){
    return Math.floor((Math.random() * window.innerWidth * 0.8) + 1);
}
 
//randomize the x position (if reusing obstacles this comes in handy)
Obstacle.prototype.randomizeXPosition = function(){
    this.xPosition = this.getRandomXPosition()
}

//prerender the obstacles
Obstacle.prototype.prerender = function(){
    this.prerenderCanvas.width = this.width
    this.prerenderCanvas.height = this.height
    
    var prerenderContext = this.prerenderCanvas.getContext('2d')
    
    prerenderContext.fillStyle = this.FILL_COLOR;
    prerenderContext.fillRect(0, 0, this.width, this.height);
}


//set the speed of the obstacle
Obstacle.prototype.setSpeed = function (passedSpeed){
    if(passedSpeed > 1){
        this.speed = passedSpeed;
    }
    else{                   //can't make less than one
        this.speed = 1;
    }
};

//increment the speed by the specified amount
Obstacle.prototype.incrementSpeed = function(amount){
    this.speed += amount;
};

//checks for a collision with the player and the obstacle
Obstacle.prototype.isCollision = function (player){
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

//reset the y position to the top of the screen
//useful for resusing obstacles
Obstacle.prototype.resetYPosition = function(){
    this.yPosition = -this.height
    this.isSafeToAddMore = false
    this.isOffScreen = false
}

//is the obstacle off screen
Obstacle.prototype.getIsOffScreen = function(){
    return this.isOffScreen
};


//update the obstacles position
Obstacle.prototype.update = function () {
    if(this.yPosition > (window.innerHeight * 0.2) && !this.isSafeToAddMore){
        this.isSafeToAddMore = true;
    }
    
    if(this.yPosition <= window.innerHeight){        
        this.yPosition = this.yPosition + this.speed;
    }
    else{
        this.isOffScreen = true
    }
   
};


