var canvas = new fabric.Canvas('myCanvas')
blockImageWidth = 30;
blockImageHeight = 30;
playerx = 10;
playery = 10;

var playerObject="";
var imageObject="";

function player_update()
{
    fabric.Image.fromURL("player.png", function(Img) {
        playerObject = Img;
        playerObject.scaleToWidth(150);
        playerObject.scaleToHeight(140);
        playerObject.set({
            top:playery,
            left:playerx
        });
canvas.add(playerObject);
    });
}


function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img) {
        imageObject = Img;
        imageObject.scaleToWidth(blockImageWidth);
        imageObject.scaleToHeight(blockImageHeight);
        imageObject.set({
            top:playery,
            left:playerx
        });
canvas.add(imageObject);
    });
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey == true && keyPressed == '80')
    {
        blockImageWidth += 10;
        blockImageHeight += 10;
        document.getElementById("cw").innerHTML = blockImageWidth;
        document.getElementById("ch").innerHTML = blockImageHeight;

    }

    if(e.shiftKey == true && keyPressed == '77')
    {
        blockImageWidth -= 10;
        blockImageHeight -= 10;
        document.getElementById("cw").innerHTML = blockImageWidth;
        document.getElementById("ch").innerHTML = blockImageHeight;

    }

    if(keyPressed == '37')
    {
     left();

    }
    if(keyPressed == '38')
    {
     up();

    }
    if(keyPressed == '39')
    {
     right();

    }
    if(keyPressed == '40')
    {
     down();

    }
    if(keyPressed == '87')
    {
     new_image('wall.jpg');

    }


    if(keyPressed == '71')
    {
     new_image('ground.png');

    }
    if(keyPressed == '76')
    {
     new_image('light_green.png');

    }
    if(keyPressed == '84')
    {
     new_image('trunk.jpg');

    }
    if(keyPressed == '82')
    {
     new_image('roof.jpg');

    }
    if(keyPressed == '89')
    {
     new_image('yellow_wall.png');

    }
    if(keyPressed == '68')
    {
     new_image('dark_green.png');

    }
    if(keyPressed == '85')
    {
     new_image('unique.png');

    }if(keyPressed == '67')
    {
     new_image('cloud.jpg');

    }


}

function down(){
  if(playery<570){
    playery+=10;
    canvas.remove(playerObject);
    player_update();
    console.log(playery);
  }
}

function up(){
    if(playery>0){
      playery-=10;
      canvas.remove(playerObject);
      player_update();
      console.log(playery);
    }
  }

  function right(){
    if(playerx<890){
      playerx+=10;
      canvas.remove(playerObject);
      player_update();
      console.log(playerx);
    }
  }

  function left(){
    if(playerx>0){
      playerx-=10;
      canvas.remove(playerObject);
      player_update();
      console.log(playerx);
    }
  }