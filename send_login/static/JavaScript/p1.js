const canvas = document.getElementById("myCanvas"),
    ctx = canvas.getContext("2d");
let particles = [],
    amount = 0;


const colors = ["#52868f", "#778983", "#8dbfbb", "#4d7273", "#496957", "#8fc0c2"];

const ww = canvas.width = window.innerWidth;
const wh = canvas.height = window.innerHeight;


function Particle(x,y){
  this.x =  Math.random()*ww;
  this.y =  Math.random()*wh;
  this.dest = {
    x : x,
    y : y
  };
  this.r =  Math.random()*ww/150 + 1;


  this.vx = Math.random()*30;
  this.vy = Math.random()*30;


  this.accX = 0;
  this.accY = 0;

  this.friction = Math.random()*0.04+0.95 ;


  this.color = colors[Math.floor(Math.random()*6)];
}

Particle.prototype.render = function() {
  this.accX = (this.dest.x - this.x)/500;
  this.accY = (this.dest.y - this.y)/500;


  this.vx += this.accX;
  this.vy += this.accY;
  this.vx *= this.friction;
  this.vy *= this.friction;


  this.x += this.vx/1.5;
  this.y +=  this.vy/1.5;

  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.r, Math.PI * 2, false);
  ctx.fill();
}

function initScene() {
  ctx.font = "bold " + (ww / 8) + "px sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("Thought Works", ww / 2, wh * 2 / 5);

  const data = ctx.getImageData(0, 0, ww, wh).data;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles = [];
  for (let i = 0; i < ww; i += Math.round(ww / 150)) {
    for (let j = 0; j < wh; j += Math.round(ww / 150)) {
      if (data  [((i + j * ww) * 4) + 3] > 150) {
        particles.push(new Particle(i, j));
      }
    }
  }
  amount = particles.length;
}

initScene();


setInterval(function(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  for(let i=0; i<amount; i++){
    particles[i].render();
  }
},0.2);
