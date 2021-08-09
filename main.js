var canvas = new fabric.Canvas('myCanvas');
player_x = 10;
player_y = 10;

var faskii = 1;
var baskii = 1;
var laskii = 1;
var haskii = 1;
var raskii = 1;

block_image_width = 30;
block_image_height = 30;
var player_object = "";
var block_image_object = "";

player_update();

function player_update() {
    fabric.Image.fromURL("player.png", function (Img) {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);
    });
}

window.addEventListener("keydown", myKeydown);

function myKeydown(e){

    keyPress = e.keyCode;
    console.log(keyPress);
    if(keyPress == 70){
        if(faskii == 1){
            newImage('blank.jpg');
            console.log("blank");
            newImage('hulk_face.png');
        }
        if(faskii == 2){
            newImage('blank.jpg');
            console.log("blank");
            newImage('ironman_face.png');
        }
        if(faskii == 3){
            newImage('blank.jpg');
            console.log("blank");
            newImage('spiderman_face.png');
        }
        if(faskii == 4){
            newImage('blank.jpg');
            console.log("blank");
            newImage('thor_face.png');
        }
        console.log(faskii);
        if(faskii == 4){
            faskii = 1;
        }else{
            faskii = faskii+1;
        }
    }
    if(keyPress == 66){
        if(baskii == 1){
            newImage('blank.jpg');
            newImage('hulk_body.png');
        }
        if(baskii == 2){
            newImage('blank.jpg');
            newImage('ironman_body.png');
        }
        if(baskii == 3){
            newImage('blank.jpg');
            newImage('spiderman_body.png');
        }
        if(baskii != 3){
        baskii = baskii+1;
        }else{
            baskii = 1;
        }
    }
    if(keyPress == 76){
        if(laskii == 1){
            newImage('blank.jpg');
            console.log("blank");
            newImage('hulk_legs.png');
        }
        if(laskii == 2){
            newImage('blank.jpg');
            console.log("blank");
            newImage('ironman_legs.png');
        }
        if(laskii == 3){
            newImage('blank.jpg');
            console.log("blank");
            newImage('spiderman_legs.png');
        }
        if(laskii == 3){
            laskii = 1;
        }else{
            laskii = laskii+1;
        }
    }
    if(keyPress == 82){
        if(raskii == 1){
            newImage('blank.jpg');
            console.log("blank");
            newImage('hulk_right_hand.png');
        }
        if(raskii == 2){
            newImage('blank.jpg');
            console.log("blank");
            newImage('ironman_right_hand.png');
        }
        if(raskii == 3){
            newImage('blank.jpg');
            console.log("blank");
            newImage('spiderman_right_hand.png');
        }
        if(raskii == 4){
            newImage('blank.jpg');
            console.log("blank");
            newImage('thor_right_hand.png');
        }
        if(raskii == 4){
            raskii = 1;
        }else{
            raskii = raskii+1;
        }
    }
    
    if(keyPress == 72){
        if(haskii == 1){
            newImage('blank.jpg');
            console.log("blank");
            newImage('hulk_left_hand.png');
        }
        if(haskii == 2){
            newImage('blank.jpg');
            console.log("blank");
            newImage('ironman_left_hand.png');
        }
        if(haskii == 3){
            newImage('blank.jpg');
            console.log("blank");
            newImage('spiderman_left_hand.png');
        }
        if(haskii == 4){
            newImage('blank.jpg');
            console.log("blank");
            newImage('thor_left_hand.png');
        }
        if(haskii == 4){
            haskii = 1;
        }else{
            haskii = haskii+1;
        }
    }
    if(keyPress == 38){
        up();
    }
    if(keyPress == 39){
        right();
    }
    if(keyPress == 37){
        left();
    }
    if(keyPress == 40){
        down();
    }
    if(keyPress == 67){
        newImage('blank.jpg')
    }

    if(e.shiftKey == true && keyPress == '80'){
        console.log('Shift+p');
        block_image_width= block_image_width+10;
        block_image_height= block_image_height+10;
        document.getElementById("width").innerHTML=block_image_width;
        document.getElementById("height").innerHTML=block_image_height;
    }
    console.log(keyPress);
    if(e.shiftKey == true && keyPress == '77'){
        console.log('Shift+m');
        block_image_width= block_image_width-10;
        block_image_height= block_image_height-10;
        document.getElementById("width").innerHTML=block_image_width;
        document.getElementById("height").innerHTML=block_image_height;
    }
}
function up(){
    if(player_y>=0){
        player_y=player_y-block_image_height;
        canvas.remove(player_object);
        player_update();
    }
}

function right(){
    if(player_x<=900){
        player_x=player_x+block_image_width;
        canvas.remove(player_object);
        player_update();
    }
}

function left(){
    if(player_x>=0){
        player_x=player_x-block_image_width;
        canvas.remove(player_object);
        player_update();
    }
}

function down(){
    if(player_y<=460){
        player_y=player_y+block_image_height;
        canvas.remove(player_object);
        player_update();
    }
}
function newImage(get_Image){
    fabric.Image.fromURL(get_Image, function (Img) {
        block_image_object = Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block_image_object);
    }); 
}