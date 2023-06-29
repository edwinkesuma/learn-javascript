// Challenge 1
const farToCel = (f) => console.log(`${((f - 32) * 5) / 9}\xB0C`);

farToCel(32);

// Challenge 2
function minMax(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return { min, max };
}

console.log(minMax([55, 32, 43, 54, 65, 76, 87, 98, 109]));

// Challenge 3
((length, width) => {
  const area = length * width;

  const output = `The area of a rectangle with a length of ${length} and a width of ${width} is ${area}.`;

  console.log(output);
})(20, 10);
