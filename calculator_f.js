// Function to add two numbers
function add(x, y) {
    return x + y;
}
// Addition
console.log(`Addition: 7 + (-2) = ${add(7, -2)}`);
console.log(`Addition: 1 + 6 = ${add(1, 6)}`);


// Function to subtract two numbers
function subtract(x, y) {
    return x - y;
}
// Subtraction
console.log(`Subtraction: -10 - 4 = ${subtract(-10, 4)}`);
console.log(`Subtraction: 13 - 7 = ${subtract(13, 7)}`);


// Function to multiply two numbers
function multiply(x, y) {
    return x * y;
}
// Multiplication
console.log(`Multiplication: 9 * 8 = ${multiply(9, 8)}`);
console.log(`Multiplication: -9 * 8 = ${multiply(-9, 8)}`);


// Function to divide two numbers
function divide(x, y) {
    if (y==0) {
        return "Error: Division by zero";
    } else {
        return x / y;
    }
}
// Division
console.log(`Division: 100 / 5 = ${divide(100, 5)}`);
console.log(`Division: 10 / 0 = ${divide(10, 0)}`);







