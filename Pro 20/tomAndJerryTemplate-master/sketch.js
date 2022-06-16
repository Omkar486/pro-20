var cat, rat 
var catImg1, catImg2, catImg3, catImg4
var ratImg1, ratImg2,ratImg3
function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png")
    catImg1 = loadAnimation("images/cat1.png")
    catImg2 = loadAnimation("images/cat2.png")
    catImg3 = loadAnimation("images/cat3.png")
    catImg4 = loadAnimation("images/cat4.png")
    ratImg1 = loadAnimation("images/mouse1.png")
    ratImg2 = loadAnimation("images/mouse2.png")
    ratImg3 = loadAnimation("images/mouse3.png")
    ratImg4 = loadAnimation("images/mouse4.png")
}

function setup(){
    frameRate(100)
    createCanvas(windowWidth,windowHeight);
    //create tom and jerry sprites here
    cat = createSprite(1700,800,260,20)
    cat.addAnimation("catSit", catImg1)
    cat.scale = 0.15
    rat = createSprite(200,800,100,20)
    rat.addAnimation("ratStart", ratImg1)
    rat.scale=0.15
    keyPressed(); 
    console.log("rat Width" + rat.width)
    console.log("cat Width" + cat.width)
}

function draw() {

   background(bgImg)
   
   //Write condition here to evalute if tom and jerry collide
     if(cat.x - rat.x < (260 - 100)/2){ //I did this because according to console, rat.width = 1667 and cat.widht = 1668 (lines 27 and 28), even when the sprites are created with the widths 100 and 260 respectively
        cat.addAnimation("catHappy", catImg4)
        cat.changeAnimation("catHappy")
        cat.scale = 0.2       
        cat.velocityX = 0

        rat.addAnimation("ratHappy", ratImg4)
        rat.changeAnimation("ratHappy")
     }
     
    drawSprites();
    console.log(cat.x-rat.x)  

    
 }


function keyPressed(){

  //For moving and changing animation write code here
 if(keyCode === LEFT_ARROW){
    cat.addAnimation("catWalk", catImg2,catImg3)
    cat.changeAnimation("catWalk")
    cat.scale = 0.2
    cat.velocityX = cat.velocityX - 10

    rat.addAnimation("ratPanic", ratImg2, ratImg3)
    rat.changeAnimation("ratPanic")
    console.log("leftPressed")
 }

}
