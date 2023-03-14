
var SpeechRecognition = window.webkitSpeechRecognition;
  
var escuta = new SpeechRecognition();

//guarda a referência a caixa de texto em uma variável
var caixaTexto = document.getElementById("caixaTexto"); 
var camera = document.getElementById("camera");
var result = document.getElementById("result");
var link = document.getElementById("link");




Webcam.set({
width:300,
height:200,
image_format:"png",
png_quality:100
})



Webcam.attach(camera)

function btnc(){
    

   
Webcam.snap((uri)=>{
console.log(uri)
result.style.display='block';
result.innerHTML="<img id='foto' src="+uri+">   "

})
}



