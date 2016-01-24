
"use strict"
function Soundtrack(){
	this.context = new AudioContext
	this.oscillator= this.context.createOscillator()

}



Soundtrack.prototype.play = function(){
var context = new AudioContext() || new webkitAudioContext(); // Create audio container
var oscillator1 = context.createOscillator(); // Create sound source 1
var oscillator2 = context.createOscillator(); // Create sound source 2
var oscillator3 = context.createOscillator(); // Create sound source 3
var gainNode2 = context.createGain(); // Create gain node 2
var gainNode3 = context.createGain(); // Create gain node 3

oscillator1.type = "sine"; // Sine wave
oscillator1.frequency.value = 200; // Default frequency in hertz
oscillator1.connect(context.destination); // Connect sound source 1 to output
oscillator1.start(0); // Play sound source 1 instantly
	
oscillator2.type = "square"; // Square wave
oscillator2.frequency.value = 500; // Frequency in hertz
oscillator2.connect(gainNode2); // Connect sound source 2 to gain node 2
gainNode2.connect(context.destination); // Connect gain node 2 to output
gainNode2.gain.value = 0.8; // Set gain node 2 to 30 percent
oscillator2.start(4); // Play sound source 2 after two seconds

oscillator3.type = "triangle"; // Triangle wave
oscillator3.frequency.value = 1500; // Frequency in hertz
oscillator3.connect(gainNode2); // Connect sound source 3 to gain node 3
gainNode3.connect(context.destination); // Connect gain node 3 to output
gainNode3.gain.value = 0.8; // Set gain node 3 to 80 percent
oscillator3.start(8); // Play sound source 3 after four seconds
	
}


Soundtrack.prototype.sleepFor = function(sleepDuration){
    var now = new Date().getTime();
    while(new Date().getTime() < now + sleepDuration){ /* do nothing */ } 
}