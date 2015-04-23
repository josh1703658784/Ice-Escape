function PointsScored(){
    this.points = 0;
    var startTime;
    var multipler;
    var previousTime;

    this.pausedTime
    
    this.oldTextWidth = window.innerWidth;
    this.oldTextHeight = window.innerHeight;
    this.oldTextX = 0.0;
    this.oldTextY = 0.0;
    
    this.rightBound = window.innerWidth - 10;
    
    this.FONT_HEIGHT = 30
    this.FONT_TYPE = this.FONT_HEIGHT + "px Verdana"
    this.FONT_COLOR = "white"

    this.Y_POSITION = 40
    this.TEXT_ALIGN = "right"
    
    this.levelStartTime = this.getSecondsSinceUnixEpoch();
    this.SECONDS_PER_LEVEL = 10;
    this.opacity = 0

    this.canvasElement = document.createElement('canvas')           //dynamically creates a canvas element
    //we don't use prerendering because of constant point updates -- it would be wasteful
    
    this.canvasElement.width = window.innerWidth
    this.canvasElement.height = window.innerHeight
    this.canvasElement.style.zIndex = "8"
    this.canvasElement.style.position = "absolute"
    this.canvasElement.style.left = "0"
    this.canvasElement.style.top = "0"
    document.body.appendChild(this.canvasElement)
    
};


//not used yet -- later dev stages
PointsScored.prototype.setZIndex = function(index){
    this.canvasElement.style.zIndex = index
}


//fades the points out
PointsScored.prototype.fadeOut = function(){
    this.clear()
    
    if(this.opacity > 0){
            this.opacity = (this.opacity - 0.1)
            this.getContext().globalAlpha = this.opacity
            this.update()
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

//fades the points in
PointsScored.prototype.fadeIn = function(){
    this.clear()
    
    if(this.opacity < 1){
            this.opacity = (this.opacity + 0.1)
            this.getContext().globalAlpha = this.opacity
            this.update()
//        }
        var that = this
        this.globalAnimationCancel = requestAnimationFrame(function(){ that.fadeIn() } );
    }
    else{
        cancelAnimationFrame(this.globalAnimationCancel);
        this.opacity = 1
        this.getContext().globalAlpha = this.opacity
        this.update()
    }
}

//called from game object when game is paused
PointsScored.prototype.pausedGame = function(){
    this.pausedTime = this.getSecondsSinceUnixEpoch()
}


//called from game object when paused game is resumed
PointsScored.prototype.resumedGame = function(){
    var timeDifference = this.getSecondsSinceUnixEpoch() - this.pausedTime
    this.levelStartTime += timeDifference
}

//clears the area of 
PointsScored.prototype.clear = function(){
    this.getContext().clearRect(this.oldTextX, this.oldTextY, this.oldTextWidth, this.oldTextHeight)
}
 
//is it time to go to the next level
PointsScored.prototype.isLevelUp = function () {
    //checks the current time from the last level up to see if we are ready for a new level
    var levelEndTime = this.levelStartTime + this.SECONDS_PER_LEVEL;
    var currentSeconds = this.getSecondsSinceUnixEpoch();
    if (currentSeconds >= levelEndTime) {                       //if we are ready for a new level

        this.levelStartTime = currentSeconds;               //set new start time

        return true;
    }
    return false;
    
}

//gets seconds since the UNIX epoch for time measurment
PointsScored.prototype.getSecondsSinceUnixEpoch = function(){
    return Math.floor(new Date() / 1000);
}


//get the context of the canvas
PointsScored.prototype.getContext = function(){
    return this.canvasElement.getContext("2d");
};

//set the right bound of the points scored (x position on screen)
PointsScored.prototype.setRightBound = function(rightBound){
    this.rightBound = rightBound;
}

//clears the points scored (only the parts used)
PointsScored.prototype.clear = function(){
    this.getContext().clearRect(this.oldTextX, this.oldTextY, this.oldTextWidth, this.FONT_HEIGHT);
}

//updates the points scored
PointsScored.prototype.update = function(){
    var context = this.getContext();
    
    this.clear()
    
    this.points += this.getSecondsSinceUnixEpoch() - this.previousTime + (this.multipler/10)
    this.previousTime = this.getSecondsSinceUnixEpoch();

    var xPosition = window.innerWidth - 10
    
    context.fillStyle = this.FONT_COLOR
    context.font= this.FONT_TYPE
    context.textAlign = this.TEXT_ALIGN
    
    var scoreText = "Score " + Math.floor(this.points)
    context.fillText(scoreText, this.rightBound, this.Y_POSITION)

    this.oldTextWidth = context.measureText(scoreText).width
    this.oldTextHeight = context.measureText(scoreText).height + 10
    this.oldTextX = this.rightBound - this.oldTextWidth;
    this.oldTextY = 40/3;
};

//start the points counter
PointsScored.prototype.startCounter = function(){
    this.startTime = this.getSecondsSinceUnixEpoch();
    this.previousTime = this.getSecondsSinceUnixEpoch();
};

//how fast the points increase by multipler
PointsScored.prototype.setMultipler = function(passedMultiplier){
    this.multipler = passedMultiplier;
};

//increment how much the points increase per time
PointsScored.prototype.incrementCounterSpeed = function(incrementAmount){
    this.multipler = this.multipler + incrementAmount;
};