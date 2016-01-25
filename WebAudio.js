"use strict"
function WebAudio(){
        
        if('webkitAudioContext' in window) {
			this.context =  new webkitAudioContext() // Create audio container
		}
		else{
			this.context = new AudioContext() 
		}

	this.frequencies = {
				"C0":16.35,
				"C#0":17.32,
				"D0":18.35,
				"D#0":19.45,
				"E0":20.60,
				"F0":21.83,
				"F#0":23.12,
				"G0":24.50,
				"G#0":25.96,
				"A0":27.50,
				"A#0":29.14,
				"B0":30.87,
				"C1":32.70,
				"C#1":34.65,
				"D1":36.71,
				"D#1":38.89,
				"E1":41.20,
				"F1":43.65,
				"F#1":46.25,
				"G1":49.00,
				"G#1":51.91,
				"A1":55.00,
				"A#1":58.27,
				"B1":61.74,
				"C2":65.41,
				"C#2":69.30,
				"D2":73.42,
				"D#2":77.78,
				"E2":82.41,
				"F2":87.31,
				"F#2":92.50,
				"G2":98.00,
				"G#2":103.83,
				"A2":110.00,
				"A#2":116.54,
				"B2":123.47,
				"C3":130.81,
				"C#3":138.59,
				"D3":146.83,
				"D#3":155.56,
				"E3":164.81,
				"F3":174.61,
				"F#3":185.00,
				"G3":196.00,
				"G#3":207.65,
				"A3":220.00,
				"A#3":233.08,
				"B3":246.94,
				"C4":261.63,
				"C#4":277.18,
				"D4":293.66,
				"D#4":311.13,
				"E4":329.63,
				"F4":349.23,
				"F#4":369.99,
				"G4":392.00,
				"G#4":415.30,
				"A4":440.00,
				"A#4":466.16,
				"B4":493.88,
				"C5":523.25,
				"C#5":554.37,
				"D5":587.33,
				"D#5":622.25,
				"E5":659.26,
				"F5":698.46,
				"F#5":739.99,
				"G5":783.99,
				"G#5":830.61,
				"A5":880.00,
				"A#5":932.33,
				"B5":987.77,
				"C6":1046.50,
				"C#6":1108.73,
				"D6":1174.66,
				"D#6":1244.51,
				"E6":1318.51,
				"F6":1396.91,
				"F#6":1479.98,
				"G6":1567.98,
				"G#6":1661.22,
				"A6":1760.00,
				"A#6":1864.66,
				"B6":1975.53,
				"C7":2093.00,
				"C#7":2217.46,
				"D7":2349.32,
				"D#7":2489.02,
				"E7":2637.02,
				"F7":2793.83,
				"F#7":2959.96,
				"G7":3135.96,
				"G#7":3322.44,
				"A7":3520.00,
				"A#7":3729.31,
				"B7":3951.07,
				"C8":4186.01,
				"C#8":4434.92,
				"D8":4698.64,
				"D#8":4978.03,
				"E8":5274.04,
				"F8":5587.65,
				"F#8":5919.91,
				"G8":6271.93,
				"G#8":6644.88,
				"A8":7040.00,
				"A#8":7458.62,
				"B8":7902.13
	}

	this.bpm = 140

	this.wave;
	this.volume;
	this.notesInMeasure;

	this.measure = 0

	this.position = 0

	this.octave = 0
}

// WebAudio.prototype.getFrequency = function(note){
// 	var base = 440
// 	var frequency = base * Math.pow(1.059463, this.halfSteps[note])
// 	var finite_frequency = parseFloat(frequency).toPrecision(5)
// 	// console.log(finite_frequency)
// 	return finite_frequency
// }

WebAudio.prototype.incrementMeasure = function(){
	this.measure += 1
}

WebAudio.prototype.incrementPosition = function(){
	this.position += 1
}

WebAudio.prototype.setNotesInMeasure = function(notesInMeasure){
	this.notesInMeasure = notesInMeasure
}

WebAudio.prototype.newFrequency = function(hertz, on, off){
	var sound_node = this.context.createOscillator()
	var gain_node = this.context.createGain()

	sound_node.type = this.wave
	sound_node.frequency.value = hertz
	sound_node.connect(gain_node)

	gain_node.gain.value = this.volume
	// gain_node.gain.setTargetAtTime(0, 0.001, 0.5)
	gain_node.connect(this.context.destination)

	sound_node.start(on)
	sound_node.stop(off)

}


// WebAudio.prototype.newNote = function(note, on, off, wave, volume){
// 	var hertz = this.frequencies[note]
// 	this.newFrequency(hertz, on/6, off/6, wave, volume)
// }

WebAudio.prototype.newNote = function(note, note_length, isIncrementPosition){
	if(note === "0"){
		this.volume = 0
		console.log("note is zero")
	}
	var measure_length = 60 / this.bpm
	var fullNote = note + this.octave
	var hertz = this.frequencies[fullNote]
	var on = this.position 
	var off = on + (note_length*measure_length)

	

	this.newFrequency(hertz, on, off)
	if(isIncrementPosition){ this.position = off }
	// console.log("on:\t" + on)
	// console.log("off:\t" + off)

	if(note === "0"){
		this.volume = 1
	}

}
