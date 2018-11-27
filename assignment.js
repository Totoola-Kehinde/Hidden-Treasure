

var box1,box2,box3,box4,box5,box6,box7,box8,box9,user_click;
var trials = 3;
var points = 0;

box1 = document.getElementById("box1");
box2 = document.getElementById("box2");
box3 = document.getElementById("box3");
box4 = document.getElementById("box4");
box5 = document.getElementById("box5");
box6 = document.getElementById("box6");
box7 = document.getElementById("box7");
box8 = document.getElementById("box8");
box9 = document.getElementById("box9");

var place_box = [box1,box2,box3,box4,box5,box6,box7,box8,box9];


var rnd_number = Math.floor(Math.random()*9);

var exact_box = place_box[rnd_number];

function cont_play(){
    rnd_number = Math.floor(Math.random()*9);
    
    exact_box = place_box[rnd_number];
}

function check_click(){
    

    if(user_click == exact_box.innerHTML){

        exact_box.style.backgroundColor = "green";
        points += 5;
        alert("correct");
        document.getElementById("points").innerHTML = points;
        cont_play();
    }
    else{
        trials -= 1;

        place_box[user_click - 1].style.backgroundColor = "red";
        if(trials >= 1){
        alert("wrong");
        document.getElementById("trials").innerHTML = trials;
        }
        else{
            alert("Game Over\n Play Again!!");
            window.location.reload();
        }
    }
    
}

function check_box1(){

    user_click = 1;

    check_click();
}

function check_box2(){
    
        user_click = 2;
    
        check_click();
    }
    
function check_box3(){
    
        user_click = 3;
    
        check_click();
    }
    
function check_box4(){
    
        user_click = 4;
    
        check_click();
    }
    
function check_box5(){
    
        user_click = 5;
    
        check_click();
    }
    
function check_box6(){
    
        user_click = 6;
    
        check_click();
    }
    
function check_box7(){
    
        user_click = 7;
    
        check_click();
    }
    
function check_box8(){
    
        user_click = 8;
    
        check_click();
    }
    
function check_box9(){
    
        user_click = 9;
    
        check_click();
    }