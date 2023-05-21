let button1 = document.getElementById("side-bar-1");
let button2 = document.getElementById("side-bar-2");
let button3 = document.getElementById("side-bar-3");
let button4 = document.getElementById("side-bar-4");
let button5 = document.getElementById("side-bar-5");
let button6 = document.getElementById("side-bar-6");
let position = 1;

// button1.addEventListener("click", function onClick() {
// //   document.body.style.backgroundImage = "url('./assets/slide1.png')";
// //   document.body.style.backgroundRepeat = "no-repeat";
// //   document.body.style.backgroundSize = "cover";
// });
// button2.addEventListener("click", function onClick() {
//   document.body.style.backgroundImage = "url('./assets/slide2.png')";
//   document.body.style.backgroundRepeat = "no-repeat";
//   document.body.style.backgroundSize = "cover";
// });
// button3.addEventListener("click", function onClick() {
//   document.body.style.backgroundImage = "url('./assets/slide3.png')";
//   document.body.style.backgroundRepeat = "no-repeat";
//   document.body.style.backgroundSize = "cover";
// });
// button4.addEventListener("click", function onClick() {
//   document.body.style.backgroundImage = "url('./assets/slide4.png')";
//   document.body.style.backgroundRepeat = "no-repeat";
//   document.body.style.backgroundSize = "cover";
// });
// button5.addEventListener("click", function onClick() {
//   document.body.style.backgroundImage = "url('./assets/slide5.png')";
//   document.body.style.backgroundRepeat = "no-repeat";
//   document.body.style.backgroundSize = "cover";
// });

function nav(position) {
  document.body.style.backgroundImage = `url('./assets/slide${position}.jpg')`;
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundSize = "cover";
  // console.log(position);
  upDateNavPosition(position);
}
nav(position);

let bar = document.getElementsByClassName("button");

function onApasaClicked(e) {
  // e.target.style.opacity = "0.5";
  console.log("test");
}
bar[0].onclick = onApasaClicked;

function goBack() {
  if (position > 2) {
    position--;
    nav(position);
    // apelam functia upDateNavPosition cu parametrul nav position
    upDateNavPosition(position);
    console.log(position);
  }
}
function goForward() {
  if (position < 6) {
    position++;
    nav(position);
    // apelam functia upDateNavPosition cu parametrul nav position
    upDateNavPosition(position);
    console.log(position);
  }
}

// primeste ca param variab position
// function upDateNavPosition(position) {
//   // cu variab psoition identificm doc.get.elem..(querySelec)
//   // hint identificam clasa/id dupa ,linia 35
//   // dupa ce il identificam ii aplicam stilurile
// }

function upDateNavPosition(position) {
  // identif toate elem. din bara de navig. cu getByClassName..., dupa ce ne asig ca avem toate cele 5 elem (printr-o singura selct.) variabila de tip array
  //  apoi facem un for, trecem prin fiecare nod, si identif daca nodul respectiv corespunde cu nr pozitiei if(index+1=== position), adauga stilurile else (scot stilurile-sau le pun la loc pe cele init)

  let items = document.getElementsByClassName("button");

  for (let i = 0; i < items.length; i++) {
    if (i + 1 === position) {
      items[i].style.backgroundColor = "white";
      items[i].style.border = "5px solid deeppink";
      items[i].style.opacity = "0.6";
      console.log("Ham Ham");
    } else {
      items[i].style.backgroundColor = "grey";
      items[i].style.backdropFilter = "blur(10px)";
      items[i].style.border = "1px solid white";
      items[i].style.opacity = "0.5";
      console.log("Miau Miau");
    }
  }
}
