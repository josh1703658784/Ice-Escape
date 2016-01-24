
"use strict"
function Soundtrack(){
	// this.context = new AudioContext
	// this.oscillator= this.context.createOscillator()
	// webAudio = new webAudio



}








Soundtrack.prototype.play = function(){
	var webAudio = new WebAudio()

	webAudio.newNote("A4", 0, 5, "triangle", 1)
	webAudio.newNote("C4", 5, 10, "triangle", 1)
	webAudio.newNote("C5", 5, 10, "triangle", 1)
	webAudio.newNote("F#7", 7, 15, "triangle", 1)
	// webAudio.newSound("C4", 2, 5, "square", 1)
	//“sine”, “square”, “saw”, “triangle”
	// var c4 = 261.63
	// var c5 = 523.25
	// var cs4 = 277.18
	// var cs5 = 554.37
	// var d4 = 293.66
	// var d5 = 587.33
	// var i = 0;
	// var counter = 100
	// while(i < 100){
	// 	counter = (counter + 100) % 301
	// 	console.log(counter)
	// 	webAudio.newOscillator(i, (i+1), counter, "triangle", 1)
	// 	i += 1
	// }
	
	
} 
