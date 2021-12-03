import { day2values } from "./day2values";

const calculatePositionAndDepth = (values: Array<string>) => {
  let pos = 0;
  let depth = 0;
  for (const val of values) {
    switch (val[0]) {
      case "f":
        pos += parseInt(val.split(" ")[1]);
        break;
      case "u":
        depth -= parseInt(val.split(" ")[1]);
        break;
      case "d":
        depth += parseInt(val.split(" ")[1]);
        break;
      default:
        break;
    }
  }
  return pos * depth;
};

// console.log(calculatePositionAndDepth(day2values));

const calculatePositionAndDepthAndAim = (values: Array<string>) => {
  let pos = 0;
  let depth = 0;
  let aim = 0;
  for (const val of values) {
    switch (val[0]) {
      case "f":
        pos += parseInt(val.split(" ")[1]);
        depth += parseInt(val.split(" ")[1]) * aim;
        break;
      case "u":
        aim -= parseInt(val.split(" ")[1]);
        break;
      case "d":
        aim += parseInt(val.split(" ")[1]);
        break;
      default:
        break;
    }
  }
  return pos * depth;
};

console.log(calculatePositionAndDepthAndAim(day2values));
