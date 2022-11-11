var diferenca = 0;
var pulsoDX = 0;
var pulsoDY = 0;
var pulsoEX = 0;
var pulsoEY = 0;

function setup(){
    video = createCapture(VIDEO)
    video.size(500,500)
    video.position(100,100)
    canvas = createCanvas(500,500)
    canvas.position(900,100)

    poseNet = ml5.poseNet(video,modelLoaded)
    poseNet.on('pose',gotPoses)
}

function draw(){
    background("black")
    document.getElementById("resultado").innerHTML = "larguta e altura serão:"+diferenca+"px";
    textSize(diferenca);
    fill("#FF0000")
    text("Alex",200,200)

}

function modelLoaded(){
    console.log("poseNet foi carregado")
}

function gotPoses(results) {
    if(results.length > 0){
        console.log(results)

        pulsoEX = results[0].pose.leftWrist.x;
        pulsoDX = results[0].pose.rightWrist.x;
        diferenca = floor(pulsoEX - pulsoDX);
        
    }
}