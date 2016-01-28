
"use strict"
function Soundtrack(){
	// this.context = new AudioContext
	// this.oscillator= this.context.createOscillator()
	// webAudio = new webAudio



}

Soundtrack.prototype.rowYourBoat = function(){
	var treble = new WebAudio()
	var bass = new WebAudio()

	treble.wave = "sine"
	treble.volume = 0.05
	bass.wave = "triangle"
	bass.volume = 0.05

	treble.octave = 3
	bass.octave = 3


	//MEASURE 1
	treble.newNote("C", 0.25, true)
	treble.newNote("C", 0.125, true)
	treble.newNote("B", 0.25, true)
	treble.newNote("B", 0.25, true)

	treble.newNote("B", 0.25, true)

}

Soundtrack.prototype.play = function(){
	// this.play1()
	var treble = new WebAudio()
	var bass = new WebAudio()

	treble.wave = "sine"
	treble.volume = 0.05
	bass.wave = "triangle"
	bass.volume = 0.05

	treble.octave = 3
	bass.octave = 3

	//############################################
	//############################################
	//############################################
	//PAGE ONE
	//############################################
	//############################################
	//############################################
	//*********************************************
	//*********************************************
	//LINE ONE
	//*********************************************
	//*********************************************
	//MEASURE 1.1
	//treble
	
	treble.octave = 5
	treble.newNote("A", 0.25, true)
	treble.octave = 4
	treble.newNote("G", 0.25, true)
	treble.newNote("G", 0.25, true)
	treble.newNote("F", 0.25, true)

	treble.newNote("G", 0.25, true)
	treble.newNote("F", 0.25, true)
	treble.newNote("F", 0.25, true)
	treble.newNote("E", 0.25, true)

	//MEASURE 1.2
	//treble
	
	
	treble.newNote("F", 0.25, true)
	treble.newNote("E", 0.25, true)
	treble.newNote("E", 0.25, true)
	treble.newNote("D", 0.25, true)

	treble.newNote("C", 0.25, true)
	treble.newNote("C", 0.25, true)
	treble.newNote("B", 0.25, true)
	treble.newNote("B", 0.25, true)

	//MEASURE 1.3
	//treble
	
	treble.newNote("A", 0.25, true)
	treble.octave = 3
	treble.newNote("G", 0.25, true)
	treble.newNote("G", 0.25, true)
	treble.newNote("F", 0.25, true)

	treble.newNote("G", 0.25, true)
	treble.newNote("F", 0.25, true)
	treble.newNote("F", 0.25, true)
	treble.newNote("E", 0.25, true)

	//*********************************************
	//*********************************************
	//LINE TWO
	//*********************************************
	//*********************************************

	//MEASURE 2.1
	//treble
	
	treble.newNote("F", 0.25, true)
	treble.newNote("E", 0.25, true)
	treble.newNote("D", 0.25, true)
	treble.newNote("D", 0.25, true)

	treble.newNote("C", 0.25, true)
	treble.newNote("C", 0.25, true)
	treble.newNote("B", 0.25, true)
	treble.newNote("B", 0.25, true)

	//MEASURE 2.2
	//treble
	
	treble.newNote("A", 0.25, true)
	treble.newNote("G", 0.25, true)
	treble.newNote("G", 0.25, true)
	treble.newNote("F", 0.25, true)

	treble.newNote("G", 0.25, true)
	treble.newNote("F", 0.25, true)
	treble.newNote("F", 0.25, true)
	treble.newNote("E", 0.25, true)

	//MEASURE 2.3
	//treble
	
	treble.newNote("A", 0.25, true)
	treble.newNote("G", 0.25, true)
	treble.newNote("G", 0.25, true)
	treble.newNote("F", 0.25, true)

	treble.newNote("G", 0.25, true)
	treble.newNote("F", 0.25, true)
	treble.newNote("F", 0.25, true)
	treble.newNote("E", 0.25, true)

	//MEASURE 2.4
	//treble
	
	treble.newNote("A", 0.25, true)
	treble.newNote("G", 0.25, true)
	treble.newNote("G", 0.25, true)
	treble.newNote("F", 0.25, true)

	treble.newNote("F", 0.25, true)
	treble.newNote("B", 0.25, true)
	treble.newNote("A", 0.25, true)
	treble.newNote("G", 0.25, true)


	//*********************************************
	//*********************************************
	//LINE THREE
	//*********************************************
	//*********************************************
	//MEASURE 3.1
	//treble
	
	treble.newNote("A", 0.25, true)
	treble.newNote("G", 0.25, true)
	treble.newNote("G", 0.25, true)
	treble.newNote("F", 0.25, true)

	treble.newNote("F", 0.25, true)
	treble.newNote("F", 0.25, true)
	treble.newNote("G", 0.25, true)
	treble.newNote("G", 0.25, true)

	//MEASURE 3.2
	//treble
	
	treble.newNote("A", 0.25, true)
	treble.newNote("G", 0.25, true)
	treble.newNote("G", 0.25, true)
	treble.newNote("F", 0.25, true)

	treble.newNote("F", 0.25, true)
	treble.newNote("B", 0.25, true)
	treble.newNote("A", 0.25, true)
	treble.newNote("G", 0.25, true)


	//MEASURE 3.3
	//treble
	
	treble.newNote("A", 0.25, true)
	treble.newNote("G", 0.25, true)
	treble.newNote("G", 0.25, true)
	treble.newNote("F", 0.25, true)

	treble.newNote("F", 0.25, true)
	treble.newNote("F", 0.25, true)
	treble.newNote("G", 0.25, true)
	treble.newNote("G", 0.25, true)

	//MEASURE 3.4
	//treble
	
	treble.newNote("A", 0.25, true)
	treble.newNote("G", 0.25, true)
	treble.newNote("G", 0.25, true)
	treble.newNote("F", 0.25, true)

	treble.newNote("A", 0.25, true)
	treble.newNote("G", 0.25, true)
	treble.newNote("G", 0.25, true)
	treble.newNote("F", 0.25, true)


	//*********************************************
	//*********************************************
	//LINE FOUR
	//*********************************************
	//*********************************************
	//MEASURE 4.1
	//treble
	
	treble.newNote("F", 0.25, true)
	treble.newNote("F", 0.25, true)
	treble.newNote("G", 0.25, true)
	treble.newNote("G", 0.25, true)

	treble.newNote("A", 0.25, true)
	treble.newNote("B", 0.25, true)
	treble.newNote("A", 0.25, true)
	treble.newNote("G", 0.25, true)

	//MEASURE 4.2
	//treble
	
	treble.newNote("A", 0.25, true)
	treble.newNote("G", 0.25, true)
	treble.newNote("G", 0.25, true)
	treble.newNote("F", 0.25, true)

	treble.newNote("G", 0.25, true)
	treble.newNote("F", 0.25, true)
	treble.newNote("F", 0.25, true)
	treble.newNote("E", 0.25, true)

	//MEASURE 4.3
	//treble
	
	treble.newNote("F", 0.25, true)
	treble.newNote("F", 0.25, true)
	treble.newNote("G", 0.25, true)
	treble.newNote("G", 0.25, true)

	treble.newNote("A", 0.25, true)
	treble.newNote("B", 0.25, true)
	treble.newNote("C", 0.25, true)
	treble.newNote("C", 0.25, true)

	//MEASURE 4.4
	//treble
	
	treble.newNote("D", 0.25, true)
	treble.newNote("C", 0.25, true)
	treble.newNote("C", 0.25, true)
	treble.newNote("B", 0.25, true)

	treble.newNote("B", 0.25, true)
	treble.newNote("E", 0.25, true)
	treble.newNote("D", 0.25, true)
	treble.newNote("C", 0.25, true)


	//*********************************************
	//*********************************************
	//LINE FIVE
	//*********************************************
	//*********************************************
	//MEASURE 5.1
	//treble
	
	treble.newNote("D", 0.25, true)
	treble.newNote("C", 0.25, true)
	treble.newNote("C", 0.25, true)
	treble.newNote("B", 0.25, true)

	treble.newNote("B", 0.25, true)
	treble.newNote("B", 0.25, true)
	treble.newNote("C", 0.25, true)
	treble.newNote("C", 0.25, true)


	//MEASURE 5.2
	//treble
	
	treble.newNote("D", 0.25, true)
	treble.newNote("C", 0.25, true)
	treble.newNote("C", 0.25, true)
	treble.newNote("B", 0.25, true)

	treble.newNote("B", 0.25, true)
	treble.newNote("E", 0.25, true)
	treble.newNote("D", 0.25, true)
	treble.newNote("C", 0.25, true)

	//MEASURE 5.3
	//treble
	
	treble.newNote("D", 0.25, true)
	treble.newNote("C", 0.25, true)
	treble.newNote("C", 0.25, true)
	treble.newNote("B", 0.25, true)

	treble.newNote("B", 0.25, true)
	treble.newNote("B", 0.25, true)
	treble.newNote("C", 0.25, true)
	treble.newNote("C", 0.25, true)

	//MEASURE 5.4
	//treble
	treble.newNote("D", 0.25, true)
	treble.newNote("C", 0.25, true)
	treble.newNote("C", 0.25, true)
	treble.newNote("B", 0.25, true)

	treble.newNote("C", 0.25, true)
	treble.newNote("B", 0.25, true)
	treble.newNote("B", 0.25, true)
	treble.newNote("A", 0.25, true)


	//############################################
	//############################################
	//############################################
	//PAGE TWO
	//############################################
	//############################################
	//############################################
	//*********************************************
	//*********************************************
	//LINE ONE
	//*********************************************
	//*********************************************
	//MEASURE 1.1
	//treble
	treble.newNote("B", 0.25, true)
	treble.newNote("B", 0.25, true)
	treble.newNote("C", 0.25, true)
	treble.newNote("C", 0.25, true)

	treble.newNote("D", 0.25, true)
	treble.newNote("E", 0.25, true)
	treble.newNote("D", 0.25, true)
	treble.newNote("C", 0.25, true)


	//MEASURE 1.2
	//treble
	treble.newNote("D", 0.25, true)
	treble.newNote("C", 0.25, true)
	treble.newNote("C", 0.25, true)
	treble.newNote("B", 0.25, true)
	treble.newNote("C", 0.25, true)
	treble.newNote("B", 0.25, true)
	treble.newNote("B", 0.25, true)
	treble.newNote("A", 0.25, true)

	//MEASURE 1.3
	//treble
	treble.newNote("B", 0.25, true)
	treble.newNote("B", 0.25, true)
	treble.newNote("C", 0.25, true)
	treble.newNote("C", 0.25, true)
	treble.newNote("D", 0.25, true)
	treble.newNote("E", 0.25, true)
	treble.newNote("D", 0.25, true)
	treble.newNote("C", 0.25, true)

	//MEASURE 1.4
	//treble
	//*********************************************
	//FIX **************************************
	//*********************************************
	treble.newNote("D", 0.25, true)
	treble.newNote("D", 0.25, true)
	treble.newNote("D", 0.25, true)
	treble.newNote("D", 0.25, true)

	treble.newNote("D", 0.25, true)
	treble.newNote("D", 0.25, true)
	treble.newNote("D", 0.25, true)
	treble.newNote("D", 0.25, true)

	//*********************************************
	//*********************************************
	//LINE TWO
	//*********************************************
	//*********************************************
	//MEASURE 2.1
	//treble
	//*********************************************
	//FIX **************************************
	//*********************************************
	treble.newNote("C", 0.25, false); treble.newNote("E", 0.25, true)
	treble.newNote("D", 0.25, true)
	treble.newNote("C", 0.25, false); treble.newNote("E", 0.25, true)
	treble.newNote("E", 0.25, true)

	treble.newNote("C", 0.25, false); treble.newNote("E", 0.25, true)
	treble.newNote("D", 0.25, true)
	treble.newNote("C", 0.25, false); treble.newNote("E", 0.25, true)
	treble.newNote("E", 0.25, true)

	//MEASURE 2.2
	//treble
	treble.newNote("D", 0.25, true)
	treble.newNote("D", 0.25, true)
	treble.newNote("F", 0.25, true)
	treble.newNote("D", 0.25, true)

	treble.newNote("F", 0.25, true)
	treble.newNote("D", 0.25, true)
	treble.newNote("F", 0.25, true)
	treble.newNote("D", 0.25, true)

	//MEASURE 2.3
	//treble
	treble.newNote("G", 0.25, false); treble.newNote("E", 0.25, true)
	treble.newNote("D", 0.25, true)
	treble.newNote("G", 0.25, false); treble.newNote("E", 0.25, true)
	treble.newNote("E", 0.25, true)

	treble.newNote("G", 0.25, false); treble.newNote("E", 0.25, true)
	treble.newNote("D", 0.25, true)
	treble.newNote("G", 0.25, false); treble.newNote("E", 0.25, true)
	treble.newNote("E", 0.25, true)

	//MEASURE 2.4
	//treble
	treble.newNote("D", 0.25, true)
	treble.newNote("E", 0.25, true)
	treble.newNote("D", 0.25, true)
	treble.newNote("C", 0.25, true)

	treble.newNote("D", 0.25, true)
	treble.newNote("E", 0.25, true)
	treble.newNote("D", 0.25, true)
	treble.newNote("C", 0.25, true)

	//*********************************************
	//*********************************************
	//LINE THREE
	//*********************************************
	//*********************************************



}