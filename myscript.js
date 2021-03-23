let angle = 0;
let r = 20;


function setup() {
  createCanvas(480,240);
  noStroke();
background('skyblue');
// frameRate(30);


text("bachの夢を見る",20,20);
text("ミサ曲ロ単調を歌う",340,20);
text("マタイ受難曲を歌う",20,220);
text("カテドラル教会でbwv228番歌う",300,220);

}

function draw() {

if (r >= 90) {  // 繰り返し条件
noLoop();
}


push();
translate(width/2, height/2);
x = sin(radians(angle)) * r;
y = cos(radians(angle)) * r;
ellipse(x, y, 10, 10);
pop();
angle += 2;
r += 0.1;

}