import { day3values } from "./day3values";

const countNums = (value: string, booleanized: Array<number>) => {
  let sumArr: Array<number> = value
    .split("")
    .map((val: string) => parseInt(val));
  for (let i = 0; i < sumArr.length; i++) {
    sumArr[i] = sumArr[i] + booleanized[i];
  }
  return sumArr;
};

const calculatePowerConsumption = (values: Array<string>) => {
  let gamma = new Array(values[0].length);
  let epsilon = new Array(values[0].length);
  let total = values[0].split("").map((val) => parseInt(val));
  for (let i = 1; i < values.length; i++) {
    total = countNums(values[i], total);
  }
  for (let i = 0; i < gamma.length; i++) {
    gamma[i] = total[i] > values.length / 2 ? 1 : 0;
    epsilon[i] = total[i] > values.length / 2 ? 0 : 1;
  }

  return parseInt(gamma.join(""), 2) * parseInt(epsilon.join(""), 2);
};

// console.log(calculatePowerConsumption(day3values));

const countDominantNum = (booleanized: Array<string>, idx: number) => {
  let onesTotal = 0;
  for (let i = 0; i < booleanized.length; i++) {
    if (booleanized[i][idx] === "1") {
      onesTotal++;
    }
  }
  if (onesTotal > booleanized.length / 2) {
    return "1";
  }
  if (onesTotal < booleanized.length / 2) {
    return "0";
  }
  return "-1";
};

const calculateLifeSupport = (values: Array<string>) => {
  let oxygenSlice = values.slice();
  let dominantValue: string;
  let pos = 0;
  while (oxygenSlice.length > 1) {
    dominantValue = countDominantNum(oxygenSlice, pos);
    if (dominantValue === "-1") {
      dominantValue = "1";
    }
    for (let i = oxygenSlice.length - 1; i >= 0; i--) {
      if (oxygenSlice[i][pos] !== dominantValue) {
        oxygenSlice.splice(i, 1);
      }
    }
    pos++;
  }
  const oxygen = oxygenSlice[0];

  let co2Slice = values.slice();
  pos = 0;
  while (co2Slice.length > 1) {
    dominantValue = countDominantNum(co2Slice, pos);
    if (dominantValue === "-1") {
      dominantValue = "1";
    }

    for (let i = co2Slice.length - 1; i >= 0; i--) {
      if (co2Slice[i][pos] === dominantValue) {
        co2Slice.splice(i, 1);
      }
    }
    pos++;
  }
  const co2 = co2Slice[0];

  return parseInt(oxygen, 2) * parseInt(co2, 2);
};

console.log(calculateLifeSupport(day3values));
