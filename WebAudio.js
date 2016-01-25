"use strict"
function WebAudio(){
	try {
        this.context = new AudioContext() || new webkitAudioContext() // Create audio container
    }
    catch(e) {
        alert("Web Audio API is not supported in this browser")
    }

 
    	this.halfSteps = {
				"C0":-57,
				"C#0":-56,
				"D0":-55,
				"D#0":-54,
				"E0":-53,
				"F0":-52,
				"F#0":-51,
				"G0":-50,
				"G#0":-49,
				"A0":-48,
				"A#0":-47,
				"B0":-46,
				"C1":-45,
				"C#1":-44,
				"D1":-43,
				"D#1":-42,
				"E1":-41,
				"F1":-40,
				"F#1":-39,
				"G1":-38,
				"G#1":-37,
				"A1":-36,
				"A#1":-35,
				"B1":-34,
				"C2":-33,
				"C#2":-32,
				"D2":-31,
				"D#2":-30,
				"E2":-29,
				"F2":-28,
				"F#2":-27,
				"G2":-26,
				"G#2":-25,
				"A2":-24,
				"A#2":-23,
				"B2":-22,
				"C3":-21,
				"C#3":-20,
				"D3":-19,
				"D#3":-18,
				"E3":-17,
				"F3":-16,
				"F#3":-15,
				"G3":-14,
				"G#3":-13,
				"A3":-12,
				"A#3":-11,
				"B3":-10,
				"C4":-9,
				"C#4":-8,
				"D4":-7,
				"D#4":-6,
				"E4":-5,
				"F4":-4,
				"F#4":-3,
				"G4":-2,
				"G#4":-1,
				"A4":0,
				"A#4":1,
				"B4":2,
				"C5":3,
				"C#5":4,
				"D5":5,
				"D#5":6,
				"E5":7,
				"F5":8,
				"F#5":9,
				"G5":10,
				"G#5":11,
				"A5":12,
				"A#5":13,
				"B5":14,
				"C6":15,
				"C#6":16,
				"D6":17,
				"D#6":18,
				"E6":19,
				"F6":20,
				"F#6":21,
				"G6":22,
				"G#6":23,
				"A6":24,
				"A#6":25,
				"B6":26,
				"C7":27,
				"C#7":28,
				"D7":29,
				"D#7":30,
				"E7":31,
				"F7":32,
				"F#7":33,
				"G7":34,
				"G#7":35,
				"A7":36,
				"A#7":37,
				"B7":38,
				"C8":39,
				"C#8":40,
				"D8":41,
				"D#8":42,
				"E8":43,
				"F8":44,
				"F#8":45,
				"G8":46,
				"G#8":47,
				"A8":48,
				"A#8":49,
				"B8":50
	}

	this.bpm = 160
}

WebAudio.prototype.getFrequency = function(note){
	var base = 440
	var frequency = base * Math.pow(1.059463, this.halfSteps[note])
	var finite_frequency = parseFloat(frequency).toPrecision(5)
	// console.log(finite_frequency)
	return finite_frequency
}

WebAudio.prototype.newFrequency = function(hertz, on, off, wave, volume){
	var sound_node = this.context.createOscillator()
	var gain_node = this.context.createGain()

	sound_node.type = wave
	sound_node.frequency.value = hertz
	sound_node.connect(gain_node)

	gain_node.gain.value = volume
	gain_node.connect(this.context.destination)

	sound_node.start(on)
	sound_node.stop(off)
}


WebAudio.prototype.newNote = function(note, on, off, wave, volume){
	var hertz = this.getFrequency(note)
	this.newFrequency(hertz, on/8, off/8, wave, volume)
}

// WebAudio.prototype.newNoteP = function(note, on, off, wave, volume, measure, note_type){
// 	var hertz = this.getFrequency(note)
// 	// this.newFrequency(hertz, on, off, wave, volume)
// 	// off = on + 0.75
// 	measure_length = 0.75
// 	off = on + (note_type * measure_length)

// 	var sound_node = this.context.createOscillator()
// 	var gain_node = this.context.createGain()

// 	sound_node.type = wave
// 	sound_node.frequency.value = hertz
// 	sound_node.connect(gain_node)

// 	gain_node.gain.value = volume
// 	gain_node.connect(this.context.destination)

// 	sound_node.start(on)
// 	sound_node.stop(off)
// }


// WebAudio.prototype.

