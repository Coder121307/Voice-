var SpeechRecognition = window.webkitSpeechRecogintion;

var recognition = new SpeechRecognition();

function start(){
    document.getElementById("text_box").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event){
    
    console.log(event);

    var Content = event.results[0][0].transcript;
    document.getElementById("text_box").innerHTML = Content;
    console.log(Content);
    speak();
}

function speak(){
    var synth = window.speechSynthesis;
    var speak_data = document.getElementById("text_box").value;
    var utterThis = window.SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
}

Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 90
});
var camera = document.getElementById("camera");