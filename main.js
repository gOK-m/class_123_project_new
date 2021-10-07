leftWristX = 0;
rightWristX = 0;
difference = 0;
function preload(){

}

function setup(){
    canvas = createCanvas(600, 400);
    canvas.position(745, 175);
    video = createCapture(VIDEO);
    video.size(550, 480);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw(){
    background("#000000");
    fill("#ff0000");
    text("gokul", leftWristX, rightWristX);
    textSize(difference);
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("left wrist = " + leftWristX + "right wrist = " + rightWristX + "diffrence" + difference);
    }
}

function modelLoaded(){
    console.log("posenet loaded");
}