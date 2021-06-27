function setup(){
    canvas = createCanvas(250, 200);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/XBmoDhsKG/model.json', modelLoaded);
}

function modelLoaded(){
    console.log('modelLoaded');
}

function draw(){
    image(video, 0, 0, 250, 200);
    classifier.classify(video, gotResult);
}

function gotResult(error, results){
    if(error){
        console.log(error);
    } else{
        console.log(results);
        document.getElementById("result_member_name").innerHTML = results[0].label;
        document.getElementById("result_member_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}