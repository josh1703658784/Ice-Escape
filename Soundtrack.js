
"use strict"
function Soundtrack(){
	// this.context = new AudioContext
	// this.oscillator= this.context.createOscillator()
	// webAudio = new webAudio



}








Soundtrack.prototype.play = function(){
	var webAudio = new WebAudio()

	//MEASURE ONE
	//treble
	webAudio.newNote("E4", 0, 1, "square", 1)
	webAudio.newNote("E4", 1, 2, "square", 1)
	webAudio.newNote("D4", 2, 3, "square", 1)
	webAudio.newNote("C4", 3, 4, "square", 1)

	webAudio.newNote("E4", 4, 5, "square", 1)
	webAudio.newNote("C4", 5, 6, "square", 1)
	webAudio.newNote("C4", 6, 7, "square", 1)
	webAudio.newNote("A4", 7, 8, "square", 1)

	//bass
	webAudio.newNote("G4", 0, 1, "square", 1)
	webAudio.newNote("B4", 0, 1, "square", 1)
	webAudio.newNote("E4", 0, 1, "square", 1)

	
	//MEASURE TWO
	//treble
	webAudio.newNote("C4", 8, 9, "square", 1)
	webAudio.newNote("B4", 9, 10, "square", 1)
	webAudio.newNote("B4", 10, 11, "square", 1)
	webAudio.newNote("A4", 11, 12, "square", 1)

	webAudio.newNote("A4", 12, 13, "square", 1)
	webAudio.newNote("G4", 13, 14, "square", 1)
	webAudio.newNote("F4", 14, 15, "square", 1)
	webAudio.newNote("F4", 15, 16, "square", 1)

	//bass
	
} 
