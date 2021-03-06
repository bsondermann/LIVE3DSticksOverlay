let gc;
let g;
let s;
let gctex;
let gtex;
let controllers = []
let config;
let controllerID=-1;
let throttlechannel,yawchannel,pitchchannel,rollchannel;
function preload(){
	config = loadXML('config.xml');
	gc = loadModel('gimbalcover.obj',false);
	g = loadModel('gimbal.obj',false);
	s = loadModel('stick.obj',false);
	gctex = loadImage('gimbalcovertex.png');
	gtex = loadImage('gimbaltex.png');

}

function setup() {

  createCanvas(720, 240, WEBGL);
	ortho();
	window.addEventListener("gamepadconnected", function(e) {
  gamepadHandler(e, true);
  console.log("Gamepad connected at index %d: %s. %d buttons, %d axes.",
    e.gamepad.index, e.gamepad.id,
    e.gamepad.buttons.length, e.gamepad.axes.length);
  });
	window.addEventListener("gamepaddisconnected", function(e) {
  console.log("Gamepad disconnected from index %d: %s",
    e.gamepad.index, e.gamepad.id);
    colour=color(120,0,0)
    gamepadHandler(e, false);
  });
  controllerID= parseInt(config.getChildren("gamecontollerID")[0].getContent());
  throttlechannel = parseInt(config.getChildren("throttle")[0].getContent())-1;
  yawchannel = parseInt(config.getChildren("yaw")[0].getContent())-1;
  pitchchannel = parseInt(config.getChildren("pitch")[0].getContent())-1;
  rollchannel = parseInt(config.getChildren("roll")[0].getContent())-1;
  
}

function draw() {
	if(controllerID!=-1){
	var gamepads = navigator.getGamepads()
	clear();
	let controller=gamepads[controllerID];
	if(controller!=undefined){
		noStroke();
		directionalLight(250, 250, 250,0,0, -1);
		rotateX(PI);
		push();
		translate(-240,0,0);
		scale(4+(2/3));
		texture(gctex);
		model(gc);
		rotateX(controller.axes[yawchannel]*0.436);
		texture(gtex);
		model(g);
		rotateY(-controller.axes[throttlechannel]*0.436);
		model(s);
		pop();
		translate(240,0,0);
		scale(4+(2/3));
		texture(gctex);
		model(gc);
		rotateX(controller.axes[rollchannel]*0.436);
		texture(gtex);
		model(g);
		rotateY(-controller.axes[pitchchannel]*0.436);
		model(s);
	}
}else{
		noLoop();
	}}
function gamepadHandler(event, connecting) {
  let gamepad = event.gamepad;
  if (connecting) {
 		 print("Connecting to controller "+gamepad.index)
    controllers[gamepad.index] = gamepad
  } else {
    delete controllers[gamepad.index]
  }
}
