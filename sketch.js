//Create variables here
var dog, dogImg, happyDogImg, happyDog, database, foodS, foodStock; 

function preload(){
  dogImg = loadImage("Dog.png")
  happyDogImg = loadImage("happyDog.png")
}

function setup() {
  createCanvas(500,500);
  database = firebase.database();

  dog = createSprite(200,200,10,10);
  dog.addImage(dogImg);
  dog.scale = 0.15;
  
  happyDog = createSprite(30,200,10,10)

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
  background("green")
  
  if(keyWentDown(UP_ARROW)){
     writeStock(foodS); 
     dog.addImage(happyDogImg);
     }

     text("Press UP_Arrow key to feed the drago Milk", 250,400)

  drawSprites();

}

function readStock(data){
     foodS=data.val();
}

function writeStock(x){

  database.ref('/').update({
    Food:x
  })
}

