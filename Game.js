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
//This object controls the game

//Game construcor
function Game(LOST_SCREEN, background) {                     
    var thePlayer;                          //holds player object
    this.theBonusObject                     //holds bonus object TO BE DEVELOPED
    this.theBackground = background         //holds background object
    var thePointCounter;                    //holds the points counter object
    var obstaclesArray;                     //holds our array of obstacles (Array.protyped)
    var globalAnimationCancel               //holds our variable to kill Canvas animation
    this.beginPauseTime                     //if the game is paused this holds the time at which is was paused so the point counter stays accurate
    
    this.nextScreen                         //will hold the value forst the next screen in the FSM in the main HTML file
    this.LOST_SCREEN = LOST_SCREEN          //holds the value for the lost screen
    
    this.LEFT_BOUND = window.innerWidth / 30                            //left bound for the player
    this.RIGHT_BOUND = window.innerWidth - window.innerWidth / 30       //right bound for the player
    
     this.levelCounter = 1                                              //start at level one...not used currently but will be for later developement
     
    this.obstaclesPrerenderCanvas = document.createElement('canvas')    //create a canvas element for the obstacles prerendering
    this.obstaclesPrerenderCanvas.width = window.innerWidth             //set width and height to the window width and height
    this.obstaclesPrerenderCanvas.height = window.innerHeight   
    
    this.inPauseMenu = false
    this.pausedCanvas
    this.theBonusObject
    
}


//returns all the seperate layers of the game as a single canvas (for blurring, etc...)
Game.prototype.returnMergedCanvas = function(){
    var mergedCanvas = document.createElement('canvas')
    mergedCanvas.width = window.innerWidth
    mergedCanvas.height = window.innerHeight
    mergedCanvas.style.position = "absolute"
    
    var mergedContext = mergedCanvas.getContext("2d");
    mergedContext.drawImage(this.theBackground.prerenderCanvas, 0, 0)
    mergedContext.drawImage(this.thePlayer.canvasElement, 0, 0)
    mergedContext.drawImage(this.obstaclesArray.canvasElement, 0, 0)
    mergedContext.drawImage(this.thePointCounter.canvasElement, 0, 0)
    
    return mergedCanvas    
}




//clears the different canvases of the game
Game.prototype.clear = function(){
//    this.theBackground.clear()
    this.thePlayer.clear()
    this.thePointCounter.clear()
    this.obstaclesArray.clear()
    
}

//hides the entire game and pauses it
Game.prototype.hide = function(){
    this.clear()
    this.pauseGame()
}

//shows the entire game
Game.prototype.show = function(){
    this.thePlayer.drawPlayer()
    this.obstaclesArray.drawObstacles()
}

//starts a new game
Game.prototype.startGame = function () {
    if(this.thePointCounter != undefined){
        this.thePointCounter.clear()        //we leave the point counter up on losing to show points -- this clears it if the player restarts a game
    }
    this.thePlayer = new Player()                   //make a new player
    this.thePlayer.leftBound = this.LEFT_BOUND      //set the max left bonud of the player
    this.thePlayer.rightBound = this.RIGHT_BOUND    //set the max right bound of the player
    this.thePlayer.drawPlayer()             
    this.thePlayer.setSpeed(10)
    this.thePointCounter = new PointsScored()
    this.thePointCounter.setRightBound(this.RIGHT_BOUND)    //set the right bound of the points counter
    
    this.obstaclesArray = new ObstaclesArray()
    this.obstaclesArray.push(new Obstacle())
    this.obstaclesArray[0].setSpeed(5)

    
    this.thePointCounter.setMultipler(1)            //sets the points multipler
    this.thePointCounter.startCounter();

    this.fadeIn()                                   //fade all the elements of the game in
    this.animate();                                 //begin the game animation
    this.togglePausedEventListener(true)
}

//toggles the PAUSE GAME event listener on or off
Game.prototype.togglePausedEventListener = function(toggle){
    if(toggle){
        window.addEventListener("keypress", listenerEvent, true);
    }
    else{
        console.log("REMOVING EVENT LISTENER")
        window.removeEventListener("keypress", listenerEvent, true)
    }
    
    var that = this
    function listenerEvent(anEvent){
        anEvent.stopImmediatePropagation()
        var event = anEvent.which || anEvent.charCode || anEvent.keyCode || 0;
        var upperP = 80
        var lowerP = 112
        if(event == upperP || event == lowerP){
            if(!that.inPauseMenu){                       //technically a "menu" but not really - pause everything
                
                that.pauseGame()
                that.pausedCanvas = that.returnMergedCanvas()   //get the entire game state on one canvas
                that.pausedCanvas.id = "tempCanvas"                //then blur it to make it look pretty
                that.pausedCanvas.style.zIndex = "100"
                document.body.appendChild(that.pausedCanvas)
                stackBlurCanvasRGB("tempCanvas", 0, 0, window.innerWidth, window.innerHeight, 20)
                that.inPauseMenu = true
                that.pauseGame()                 //pause the game
            }
            else{                   //resume the game
                that.pausedCanvas.parentElement.removeChild(that.pausedCanvas)     //remove the blurred game canvas
                that.inPauseMenu = false
                that.show()
                that.resumeGame()                                  //keep on going

            }
        }
    }
}



//pauses the game along with the points counter
Game.prototype.pauseGame = function(){
    console.log("pausing game<<<<<<<<<<<<<<<<")
    cancelAnimationFrame(this.globalAnimationCancel)
    this.thePointCounter.pausedGame()
}

//resumes the game from a pause
Game.prototype.resumeGame = function(){
    this.thePointCounter.resumedGame()  //resumes the point counter
    this.animate()                      //resumes animation
}

//fades the game elements out
Game.prototype.fadeOut = function(){
    console.log("see Game:100")    //without this console log the fade in doesn't always work right -- this forces it to happen
    this.thePlayer.fadeOut()
    this.obstaclesArray.fadeOut()
    //we keep the point counter to show the user
}

//fades the game elements in
Game.prototype.fadeIn = function(){
    this.thePlayer.fadeIn()
    this.obstaclesArray.fadeIn()
    this.thePointCounter.fadeIn()
}

Game.prototype.isGenerateBonusObject = function(){
    return false
    var theNumber = Math.floor((Math.random() * 1000) + 1)
    if(theNumber == 500){
        console.log("MAKING BONUS OBJECT")
        return true
    }
    return false
}

//actually animates the game
Game.prototype.animate = function () {
    //RAF returns an object to cancel the animation -- we need to use Function.prototype.bind to work inside an object method
    var that = this
    this.globalAnimationCancel = requestAnimationFrame(function(){ that.animate() } );      //this=that is usually faster than using prototype.bind

    if(this.obstaclesArray.isCollision(this.thePlayer)){        //check for collision
        this.nextScreen = LOST_SCREEN                           //next screen is LOST
        cancelAnimationFrame(this.globalAnimationCancel);       //cancel the animation
        this.togglePausedEventListener(false)
    }
    
    //THIS IS IN DEVELOPMENT YET
    if(this.isGenerateBonusObject()){
        this.obstaclesArray.push(new BonusObject())
    }
   if(this.theBonusObject != null){
        this.theBonusObject.update()
   }
    
    
    
    this.thePlayer.animatePlayer();                         //animate/update the player 
    this.obstaclesArray.animateObstacles(this.thePlayer)    //obstacles target the player every so often so we pass it in for coordinates
    
    if(this.thePointCounter.isLevelUp()){                   //can probably move this out of RAF at some point<<<<<<<<<<<<<<<<<<<<<<<<
        this.obstaclesArray.incrementSpeed(StaticSettings.gameIncrementObstacleSpeedAmount)               //increment speed of game
        this.thePointCounter.incrementCounterSpeed(StaticSettings.gameIncrementCounterSpeedAmount)       //increment how fast the player accumulates points
        this.levelCounter++
    }
    this.thePointCounter.update();      //update the point counter -- can maybe move this out of RAF at some point too
}

