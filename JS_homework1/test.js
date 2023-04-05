const heightOutput = document.querySelector("#height");
const widthOutput = document.querySelector("#width");

function reportWindowSize() {
  heightOutput.textContent = window.innerHeight;
  widthOutput.textContent = window.innerWidth;
}

window.onresize = reportWindowSize;

// let count = 0;
// let resultROW = "";
// for (let week = 0; week < 6; week++) {
//   for (let day = 0; day < 7; day++) {
//     count++;
//     if (count < 7 || count > 36) {
//       resultROW += "*";
//     } else {
//       resultROW += count - 6;
//     }
//     resultROW += "\t";
//   }
//   console.log(resultROW);
//   resultROW = "";
// }
// console.log(count);
