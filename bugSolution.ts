function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

const result1 = add(5, 3); // 8
const result2 = subtract(10, 4); // 6

// Solution: Type check and conversion
const numStr = "3";
const parsedNum = parseFloat(numStr);

if (!isNaN(parsedNum)) {
  const result3 = add(5, parsedNum); // Corrected: Now it's a number
}

//Alternative Solution using type assertion (Use with caution):
const result4 = add(5,(<number>"3"));