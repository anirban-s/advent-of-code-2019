const fs = require("fs");
const input = fs.readFileSync("input.txt", "utf8").split("\r\n");

const splittedInput = input.map(orbit => orbit.split(")"));
let total = -1;
//
// const route = startPoint => {
//   let nextPoint = splittedInput.filter(single => single[1] === startPoint)[0];
//   while (nextPoint) {
//     nextPoint = splittedInput.filter(single => single[1] === nextPoint[0])[0];
//     total++;
//   }
// };
//
// splittedInput.forEach((orbits, i) => {
//   const [_, rightOrbit] = orbits;
//   process.stdout.write("\033c");
//   console.log(
//     `calculating direct/indirect orbits `,
//     "\x1b[36m",
//     `${i + 1}`,
//     "\x1b[37m",
//     "of",
//     "\x1b[31m",
//     ` ${splittedInput.length} `
//   );
//   route(rightOrbit);
// });
//
// console.log(
//   "\x1b[37m",
//   `What is the total number of direct and indirect orbits in your map data?
// => Answer: ${total}`
// );


const route = startPoint => {
  let nextPoint = splittedInput.filter(single => single[1] === startPoint)[0];
  const orbiting = [];
  while (nextPoint) {
    orbiting.push(nextPoint);
    nextPoint = splittedInput.filter(single => single[1] === nextPoint[0])[0];
  }

  return orbiting;
};

const findTheMiddleOrbit = (routeYOU, routeSAN) => {
  for (let i = 0; i < routeYOU.length; i++) {
    for (let j = 0; j < routeSAN.length; j++) {
      if (routeYOU[i][1] === routeSAN[j][1]) {
        return i + j - 2; // minus 2 because the startpoint of YOU and the startppoint of SAN do not count
      }
    }
  }
};

const routeYOU = route("YOU");
const routeSAN = route("SAN");

const orbitalTransfers = findTheMiddleOrbit(routeYOU, routeSAN);

console.log(`What is the minimum number of orbital transfers required to move from the object YOU are orbiting to the object SAN is orbiting?
=> Answer: ${orbitalTransfers}`);
