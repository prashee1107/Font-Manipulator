left_wristX = 0;
right_wristX = 0;
difference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(400,400);
    video.position(10,100);

    canvas = createCanvas(550,400);
    canvas.position(430,130);
    
    poseNet = ml5.poseNet(video,modelloaded);
    poseNet.on("pose", gotPoses);
}

function modelloaded(){
    console.log("PoseNet is initialised!");
   }
function draw(){
    background("#509ed9");
    document.getElementById("font_size").innerHTML = "Font size of the text wil be = "+difference+ "px";
    fill("#03fc28");
    textSize(difference);
    text("Prashee",50,300);
}
function gotPoses(results){
 if(results.length > 0){
     console.log(results);

     left_wristX =  results[0].pose.leftWrist.x;
     right_wristX = results[0].pose.rightWrist.x;

     difference = floor(left_wristX - right_wristX);

     console.log("Left WristX = "+left_wristX+" Right WristX = "+right_wristX+" Difference = "+difference);
}
}


