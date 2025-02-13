
const randomNumber1 = Math.floor(6*Math.random()+1);
const randomNumber2 = Math.floor(6*Math.random()+1);

function getImageName(theNumber) {
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



console.log(getImageName(randomNumber1));
console.log(getImageName(randomNumber2));