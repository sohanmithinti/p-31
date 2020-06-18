const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var snake1;
var food;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    snake1 = new Snake();
    food = createSprite(random,random,10,10);
}
function draw(){
    background("white");
    Engine.update(engine);
    if(snake1.isTouching(food)){
        food.visible = false;
        snake1.height = snake.height+10;
    }
}