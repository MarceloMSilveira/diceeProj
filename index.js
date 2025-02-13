
const randomNumber1 = Math.floor(6*Math.random()+1);
const randomNumber2 = Math.floor(6*Math.random()+1);

function getImagePath(theNumber) {
  let imageName="";

  switch (theNumber) {
    case 1:
        imageName = "./images/dice1.png";
        break;
    case 2:
        imageName = "./images/dice2.png";
        break;
    case 3:
        imageName = "./images/dice3.png";
        break;
    case 4:
        imageName = "./images/dice4.png";
        break;
    case 5:
        imageName = "./images/dice5.png";
        break;
    case 6:
        imageName = "./images/dice6.png";
        break;
    default:
        console.error("Número inválido");
        imageName = "";
        break;
  };
  return imageName;
}

const pathImg1 = getImagePath(randomNumber1);
const pathImg2 = getImagePath(randomNumber2);

const diceeImg1 = document.querySelector(".img1");
const diceeImg2 = document.querySelector(".img2");

diceeImg1.setAttribute("src", pathImg1);
diceeImg2.setAttribute("src", pathImg2);

console.log(getImagePath(randomNumber1));
console.log(getImagePath(randomNumber2));