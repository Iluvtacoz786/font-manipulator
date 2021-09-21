var noseX=0;
var noseY=0;
var leftWristX=0;
var leftWristY=0;
var rightWristX=0;
var rightWristY=0;
var difference=0;
function preload(){}
function setup(){
    canvas=createCanvas(500,400);
    canvas.position(700,200);
    video=createCapture(VIDEO)
    video.size(350,350);
  posenet=ml5.poseNet(video,modelLoaded)
posenet.on("pose",gotResult);

}
function draw(){
    background("#fcd9fb")
    textSize(difference);
    text("Hello", noseX,noseY);
    
}
function modelLoaded(){
    console.log("model is loaded");
}
function gotResult(result){
    if(result.length>0){
        noseX=result[0].pose.nose.x;
        noseY=result[0].pose.nose.y;
        leftWristX=result[0].pose.leftWrist.x;
        leftWristY=result[0].pose.leftWrist.y;
        rightWristX=result[0].pose.rightWrist.x;
        rightWristY=result[0].pose.rightWrist.y;
     console.log(leftWristX,leftWristY);
     console.log(rightWristX, rightWristY);
     difference=leftWristX-rightWristX;
     difference=Math.floor(difference);
     document.getElementById("font_size").innerHTML=difference;
    }
}

