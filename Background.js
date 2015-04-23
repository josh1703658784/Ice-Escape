//the background for the game is passed around throughout the different stages
//it's a little messy but saves on memory and C/GPU cycles
//prerendering blur isn't fully implemented yet - blur does work but trying to optimize it
function Background(){
    this.leftBound = window.innerWidth / 30;                           
    this.rightBound = window.innerWidth - window.innerWidth / 30;     
    this.BACKGROUND_COLOR = "#663300"   
    this.BOUNDS_COLOR = "#009933"
    this.currentBlur = 0                                        //no blur currently
    this.blurAmount = 180                                       //what we blur to on request (max blur)
    this.canvasElement = document.createElement('canvas')       //create a new canvas
    this.zIndex = "1"                                           //zindex forces this to the bottom always
    this.prerenderCanvas = document.createElement('canvas') 
    this.prerenderBlurredCanvas = document.createElement('canvas')
    this.opacity = 0                                            //fully transparent at first
    this.initialize()         
}

Background.prototype.initialize = function(){
    this.prerender()                //prerender everything
    
    this.setupMainCanvas()          //setup the main canvas (the one appended to the DOM)
    this.prerenderBlur()            //prerender the blur -- THIS IS STILL IN DEVELOPMENT
}

//not currently use but will in later development to take load off the DOM with removes/adds
Background.prototype.setZIndex = function(index){
    this.canvasElement.style.zIndex = index
}

//appends the canvas we will see to the dom
Background.prototype.setupMainCanvas = function(){
    this.canvasElement.style.position = "absolute"
    this.canvasElement.width = window.innerWidth
    this.canvasElement.height = window.innerHeight
    this.canvasElement.id = "backgroundCanvas"

    document.body.appendChild(this.canvasElement)
}

//prerender everything to the hidden canvas
Background.prototype.prerender = function(){
    this.prerenderCanvas.id = "backgroundCanvasPrerender"
    this.prerenderBlurredCanvas.id = "backgroundBlurredPrerender"
    
    var prerenderContext = this.prerenderCanvas.getContext('2d')

    this.prerenderCanvas.width = window.innerWidth
    this.prerenderCanvas.height = window.innerHeight
    this.prerenderCanvas.style.position = "absolute"
    this.prerenderCanvas.style.left = "0"
    this.prerenderCanvas.style.top = "0"
    
    this.prerenderBlurredCanvas.width = window.innerWidth
    this.prerenderBlurredCanvas.height = window.innerHeight
    this.prerenderBlurredCanvas.style.position = "absolute"
    this.prerenderBlurredCanvas.style.left = "0"
    this.prerenderBlurredCanvas.style.top = "0"

    var prerenderContext = this.prerenderCanvas.getContext('2d')

    prerenderContext.fillStyle = this.BACKGROUND_COLOR;
    prerenderContext.fillRect(0, 0, window.innerWidth, window.innerHeight);

    prerenderContext.fillStyle = this.BOUNDS_COLOR;
    prerenderContext.fillRect(0, 0, this.leftBound, window.innerHeight);
    
    prerenderContext.fillStyle = this.BOUNDS_COLOR;
    prerenderContext.fillRect(this.rightBound, 0, window.innerWidth, window.innerHeight);
}

//actually prerenders the blur -- still in development
Background.prototype.prerenderBlur = function(){
    this.getContext().globalAlpha = 0
    this.getContext().drawImage(this.prerenderCanvas, 0, 0)
    
//    blurredContext.drawImage(this.prerenderCanvas, 0, 0)
    stackBlurCanvasRGB(this.canvasElement.id, 0, 0, window.innerWidth, window.innerHeight, 180)    
    
    var blurredContext = this.prerenderBlurredCanvas.getContext("2d")
    blurredContext.drawImage(this.canvasElement, 0, 0)

//    this.getContext().drawImage(this.prerenderCanvas, 0, 0)
    this.getContext().globalAlpha = 1
}

//fades the background out - this probably won't be used until the blur can be prerendered
//clears the canvas and reapplies the prerender with more transparency until fully hidden
Background.prototype.fadeOut = function(){
    this.clear()               
    var context = this.getContext()

    if(this.opacity > 0){
        this.opacity = (this.opacity - 0.1)
        context.globalAlpha = this.opacity
        this.drawBackground()

        var that = this
        this.globalAnimationCancel = requestAnimationFrame(function(){ that.fadeOut() } );
    }
    else{
        cancelAnimationFrame(this.globalAnimationCancel);
        this.opacity = 0                        //incase opacity is less than zero (which doesn't make sense logically)
        context.globalAlpha = this.opacity
        this.canvasElement.parentNode.removeChild(this.canvasElement);  //removes from the dom so it doesn't take clicks
    }
}

//fades the background in when needed
Background.prototype.fadeIn = function(){
    this.clear()
    var context = this.getContext()

    if(this.opacity < 1){                   //keep making more visible if not fully visible
        this.opacity = (this.opacity + 0.1)
        context.globalAlpha = this.opacity
        this.drawBackground()

        var that = this
        this.globalAnimationCancel = requestAnimationFrame(function(){ that.fadeIn() } );
    }
    else{
        cancelAnimationFrame(this.globalAnimationCancel);
        this.opacity = 1
        context.globalAlpha = this.opacity
        document.body.appendChild(this.canvasElement)
        this.drawBackground()
    }
}

//clears teh background
Background.prototype.clear = function(){
    this.getContext().clearRect(0, 0, window.innerWidth, window.innerHeight)
}

//blurs the background to the requested amount
Background.prototype.blur = function(blurAmount){
    if(blurAmount != this.currentBlur){         //if canvas already blurred to this amonut no need to redraw it
        this.show()
        stackBlurCanvasRGB(this.canvasElement.id, 0, 0, window.innerWidth, window.innerHeight, blurAmount)
        this.currentBlur = blurAmount
    }
}

//draws the background -- just a different name for the same thing
Background.prototype.createBackground = function (){
    this.drawBackground()    
};

//lays the prerender ontop the visible canvas
Background.prototype.drawBackground = function(){
    var mainContext = this.getContext()
    mainContext.drawImage(this.prerenderCanvas, 0, 0)
}

//STILL IN DEVELOPMENT FOR PRERENDER BLUR
Background.prototype.drawBlurredBackground = function(){
    var mainContext = this.getContext()
    mainContext.drawImage(this.prerenderBlurredCanvas, 0, 0)
    
}

//currently removes from DOM -- plan on using zindex at later dev stages
Background.prototype.hide = function(){
    this.clear()
//    this.setZIndex(this.zIndex)
}

//shows the background/adds to dom -- plan on using zindex at later dev stages
Background.prototype.show = function(){
    this.drawBackground()
//    this.setZIndex(this.setZIndex * -1)
}

//set the left bound (where wraparound begins) for the background
Background.prototype.setLeftBound = function(leftBound){
    this.leftBound = leftBound;
}

//set the right bound (where wraparound begins) for the background
Background.prototype.setRightBound = function(rightBound){
    this.rightBound = rightBound;
}

//gets the context of the visible background
Background.prototype.getContext = function(){
    return this.canvasElement.getContext("2d");
}

