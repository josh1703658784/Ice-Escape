"use strict"
function StaticSettings(){
}


	//GENERIC
	StaticSettings.leftBound = window.innerWidth / 30
	StaticSettings.rightBound = window.innerWidth - (window.innerWidth / 30)

	//SCREEN CONTROLS
	StaticSettings.START_SCREEN = 0
    StaticSettings.GAME_SCREEN = 1
    StaticSettings.LOST_SCREEN = 2
    StaticSettings.HELP_SETTINGS_SCREEN = 3
    StaticSettings.PAUSE_SCREEN = 4
    StaticSettings.SHARE_SCREEN = 5

	//GAME

	StaticSettings.gameIncrementObstacleSpeedAmount = 2
	StaticSettings.gameIncrementCounterSpeedAmount = 2

	//BACKGROUND
	StaticSettings.backgroundBoundsColor = "#f5f5f5"
	StaticSettings.backgroundShowZIndex = "1"
	StaticSettings.backgroundColor = "#0282a5"  


	//OBSTACLE
	StaticSettings.obstacleColor = "#f5f5f5"
	StaticSettings.obstacleShowZIndex = "3"
	StaticSettings.obstacleHideZIndex = "-3"
	StaticSettings.obstacleMaxWidthMultipler = 0.2
	StaticSettings.obstacleMaxHeightMultipler = 0.4
	StaticSettings.getObstacleWidth = function(){
		return Math.floor((Math.random() * window.innerWidth * StaticSettings.obstacleMaxWidthMultipler) + 1)
	}
	StaticSettings.getObstacleHeight = function(){
		return Math.floor((Math.random() * window.innerHeight * StaticSettings.obstacleMaxHeightMultipler) + 1)
	}

	//PLAYER
	StaticSettings.playerStartX = Math.floor(window.innerWidth/2) 
	StaticSettings.playerStartY = Math.floor(window.innerHeight*0.8)
	StaticSettings.playerTopBound = 0
	StaticSettings.playerBottomBound = window.innerHeight
	StaticSettings.playerSpeed = 5
	StaticSettings.playerShowZIndex = "2"
	StaticSettings.playerHideZIndex = "-2"

	//MENU
	StaticSettings.menuFontColor = "white"
	StaticSettings.menuFontType = "30px Arial"
	StaticSettings.menuFontTransparency = 0.2
	// StaticSettings.menuButtonTransparency = 0.2
	StaticSettings.menuTitleAlignment = "center"
	StaticSettings.menuShowZIndex = "10"
	StaticSettings.menuShowZIndex = "-10"



	//BUTTON
	StaticSettings.buttonTransparency = 0.2
	StaticSettings.buttonTextTransparency = 0.3
	StaticSettings.buttonFontColor = "white"
	StaticSettings.buttonFontType = "30px Arial"
	StaticSettings.buttonFillColor = "white"
	StaticSettings.buttonShowZIndex = "11"
	StaticSettings.buttonShowZIndex = -"11"


	//POINTS SCORED
	StaticSettings.pointsFontHeight = 30
	StaticSettings.pointsFontType = StaticSettings.pointsFontHeight + "px Verdana"
	StaticSettings.pointsFontColor = "white"
	StaticSettings.pointsYPosition = 40
	StaticSettings.pointsRightBound = window.innerWidth - 10
	StaticSettings.pointsTextAlign = "right"
	StaticSettings.pointsShowZIndex = "3"
	StaticSettings.pointsHideZIndex = "-3"
		StaticSettings.pointsSecondsPerLevel = 10