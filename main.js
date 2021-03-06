//https://teachablemachine.withgoogle.com/models/4l31CuQpp/
Webcam.set(
    {
        width: 350,
        height:300,
        image_format:'png',
        png_quality:90
    });

camera = document.getElementById("camera");

Webcam.attach('#camera');

function snapshort()
{ Webcam.snap(function(data_uri){
         document.getElementById("result").innerHTML='<img id="captured_img" src="'+data_uri+'">';
          });
}console.log("ml5 version",ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/4l31CuQpp/model.json',modelLoaded);
function modelLoaded()
{
    console.log("model is loaded");
}

function filtering()
{ 
    img = document.getElementById('captured_img'); 
    classifier.classify(img,gotResult);
}

function gotResult(error, results)
{ 
    if(error) {
        console.error(error);
    }else {
        console.log(results);
        document.getElementById("result_objct_name").innerHTML = results[0].label;
        document.getElementById("result_objct_accuracy").innerHTML = results[0].confidence.toFixed(3);
        
    }
}