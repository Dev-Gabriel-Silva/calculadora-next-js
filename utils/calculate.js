export function calculate(prev, current, op) {
  switch (op) {
    case "+":
      return prev + current;
    case "-":
      return prev - current;
    case "x":
    case "*":
      return prev * current;
    case "/":
      return prev / current;
    default:
      return current;
  }
}
