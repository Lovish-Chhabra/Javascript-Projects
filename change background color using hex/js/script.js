const button = document.querySelector("button");// to select the button
const body = document.querySelector("body");// to select the body
const hexvalue = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];// input array for hex value 
const value = document.querySelector("#text1");// to select the span where we can add hex value

button.addEventListener("click", changehex);//added eventlistener to call chaneghex function

function changehex() {
  let hex = "#";
  for (let i = 0; i < 6; i++) {
    const Index = Math.floor(Math.random() * hexvalue.length);//generate random hex values
    hex += hexvalue[Index];
  }
  value.textContent = hex;// update hex value in html text
  body.style.backgroundColor = hex;//change background color
}
