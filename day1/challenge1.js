var fs = require("fs");
var text = fs.readFileSync("./data.txt").toString('utf-8');
var textByLine = text.split("\n")


//part 1
var totalFuel = 0;

for (var i of textByLine) {
  totalFuel += (Math.floor(i / 3) - 2)
}
console.log(totalFuel);


//part 2
totalFuel = 0;
function fuel(m){
  fl = 0
  f = Math.floor(m / 3) - 2;
  fl += f;
  while(f > 3){
    f = Math.floor(f / 3) - 2;
    f = f < 0 ? 0: f;
    fl += f;
  }
  return fl;
}

for (var i of textByLine) {
  totalFuel += fuel(i)
}

console.log(totalFuel);
