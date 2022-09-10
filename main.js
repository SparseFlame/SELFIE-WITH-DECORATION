function preload(){

}

function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw(){
    image(video, 160, 120, 320, 240);
    tint(tint_color);
    rect(100,60,60,60)
    rect(100,360,60,60)
    rect(480,360,60,60)
    rect(480,60,60,60)
    line(130,120,130,360)
    line(510,120,510,360)
    line(160,90,480,90)
    line(160,390,480,390)
    circle(130,90,60)
    circle(130,390,60)
    circle(510,90,60)
    circle(510,390,60)
}

function take_snapshot(){
    save("IDK.png");
}

function filter_tint(){
    tint_color = document.getElementById("tint_color_choose").value;
}