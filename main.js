function preload() {

}

function setup() {
    canvas = createCanvas(700,400);
    canvas.position(425, 200);
    video = createCapture(VIDEO);
    video.size(300,200);
    video.hide();

}

function draw() {
    image(video, 200, 100, 300 , 200);

    stroke(0,0,255);
    fill(0,0,255);
    rect(50, 50, 600, 20);
    rect(50, 350, 600, 20);
    rect(50, 50, 20, 300);
    rect(615, 50, 20, 300);

    stroke(0,255,0);
    fill(0,255,0);
    rect(600, 35, 50, 50, 15);
    rect(35, 35, 50, 50, 15);
    rect(600, 335, 50, 50, 15);
    rect(35, 335, 50, 50, 15);


    
}