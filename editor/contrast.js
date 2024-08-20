// All list colors are sorted by order in the category orders

let catelength = 10;

const normalcolors = ["#cf9100", "#3399ff", "#689c00", "#1b85d1", "#21d9b7", "#f2951b", "#f2461b", "#e643d2", "#0fbd8c", "#a826ff"]

const contrastcolors = ["#ffce5c", "#8ac4ff", "#c6ff54", "#51aced", "#91ffeb", "#ffc170", "#ff8b6e", "#ff94f2", "#7dfad7", "#d08aff"]

function contrastBlocks(trueorfalse)
// true = blocks on contrast, false = blocks on normal color
for (let i = 0; i < catelength; i++) {
  if (trueorfalse == true) {
    document.getElementById("blockly-" + i).style.backgroundColor = normalcolors[i];
    document.getElementById("blockly-" + i).style.color = "white";
  } else {
    document.getElementById("blockly-" + i).style.backgroundColor = contrastcolors[i];
    document.getElementById("blockly-" + i).style.color = "black";
  }
} 
