let randomNumber1 = Math.floor((Math.random() * 6) + 1);
let randomDiceImg = "dice" + randomNumber1 + ".png";
let imgSource = "images/" + randomDiceImg;

var img1 = document.querySelectorAll("img")[0];

img1.setAttribute('src', imgSource)

let randomNumber2 = Math.floor((Math.random()* 6) + 1);
let randomImgSource = "images/dice" + randomNumber2 + ".png";

var img2 = document.querySelectorAll("img")[1];

img2.setAttribute('src', randomImgSource)

if(imgSource > randomImgSource){
    document.querySelector("h1").innerHTML = "dice 1 <em>Winner</em>  "  +`'` + randomNumber1 + "' > '" + randomNumber2 + "'";
}
else if(imgSource < randomImgSource){
    document.querySelector("h1").innerHTML = "dice 2 <em>Winner</em>   "  +`'` + randomNumber2 + "' > " + randomNumber1 + "'";
}
else{
    document.querySelector("h1").innerHTML = "<em>Draw </em>";

}