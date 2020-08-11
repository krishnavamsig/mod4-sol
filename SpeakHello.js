(function(window){
	var helloSpeaker = new Object();
	var word="Hello";
	helloSpeaker.speak=function speak(name){
		console.log(word +" "+ name);
	};
	window.helloSpeaker=helloSpeaker;
	})(window);