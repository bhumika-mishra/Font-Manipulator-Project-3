right_Wrist_X = 0;
left_Wrist_Y = 0;
difference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(400,400);
    video.position(10, 50);

    canvas = createCanvas(400,400);
    canvas.position(430, 130);

    poseNet = ml5.poseNet(video,  modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('PoseNet Is Initialized!');
}
function draw(){
    background('#969A97');
    document.getElementById("font_size").innerHTML = "Width And aheight of a Square will be =  " + difference +"px";
    fill('#00ff0a');
    textSize(difference);
    text('Bhumika' , 50, 400);

}
function gotPoses(results, error){
    if(error){
        console.error(error);
    }
    if(results.length > 0){
        console.log(results);

        right_Wrist_x = results[0].pose.rightWrist.x;
        left_Wrist_x = results[0].pose.leftWrist.x;

        difference = floor(left_Wrist_x - right_Wrist_x);

        console.log("rightwrist_x = "+results[0].pose.rightWrist.x+ "rightwrist_y = "+results[0].pose.rightWrist.y);
        console.log("leftwrist_x = "+results[0].pose.leftWrist.x+ "leftwrist_y = "+results[0].pose.leftWrist.y);
    }
}