import { day1values } from "./day1values";

const countIncreases = (nums: Array<number>) => {
  let counter = 0;
  let last = nums[0];
  for (const num of nums) {
    if (num > last) {
      counter++;
    }
    last = num;
  }
  return counter;
};

// console.log(countIncreases(day1values));

const countIncreasesSlidingWindow = (nums: Array<number>) => {
  let counter = 0;
  let lastSum = nums[0] + nums[1] + nums[2];
  let newSum: number;
  for (let i = 1; i < nums.length - 2; i++) {
    newSum = nums[i] + nums[i + 1] + nums[i + 2];
    if (newSum > lastSum) {
      counter++;
    }
    lastSum = newSum;
  }
  return counter;
};

console.log(countIncreasesSlidingWindow(day1values));
