function startclassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/OlfV9cUoq/model.json",modelReady);  
}

function modelReady(){
    console.log("MODEL IS LOADED!!");
    classifier.classify(gotResults);
}

function gotResults(error,results){
    console.log("GOT RESULT");

    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        random_r = Math.floor(Math.random() * 255)+1;
        random_g = Math.floor(Math.random() * 255)+1;
        random_b = Math.floor(Math.random() * 255)+1;
        document.getElementById("result_label").innerHTML = 'I can hear '+ results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - '+ results[0].confidence.toFixed(2)*100+"%";
        document.getElementById("result_label").style.color = "rgb("+random_r+","+random_g+","+random_b+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_r+","+random_g+","+random_b+")";
        img = document.getElementById("cat");
        img2 = document.getElementById("cow");
        img3 = document.getElementById("dog");
        img4 = document.getElementById("lion");
        if(results[2].label == "Meowing"){
            img.src = "cat.png";
            img2.src = "cat.png";
            img3.src = "cat.png";
            img4.src = "cat.png";
        }
        else if(results[1].label == "Barking"){
            img.src = "dog.jpg";
            img2.src = "dog.jpg";
            img3.src = "dog.jpg";
            img4.src = "dog.jpg"; 
        }
        else if(results[4].label == "Mooing"){
            img.src = "cow.jpg";
            img2.src = "cow.jpg";
            img3.src = "cow.jpg";
            img4.src = "cow.jpg"; 
        }
        else {
            img.src = "lion.png";
            img2.src = "lion.png";
            img3.src = "lion.png";
            img4.src = "lion.png"; 
        }
    }
}