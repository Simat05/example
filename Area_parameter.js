// Function to calculate area of a rectangle
function calculateRectangleArea(length, width) {
    return length * width;
}

// Function to calculate perimeter of a rectangle
function calculateRectanglePerimeter(length, width) {
    return 2 * (length + width);
}

// Function to calculate area of a circle
function calculateCircleArea(radius) {
    return Math.PI * radius ** 2;
}

// Function to calculate circumference of a circle
function calculateCircleCircumference(radius) {
    return 2 * Math.PI * radius;
}

// Test rectangle calculations
let rectangleLength = 4;
let rectangleWidth = 5;
console.log("Rectangle Area:", calculateRectangleArea(rectangleLength, rectangleWidth));
console.log("Rectangle Perimeter:", calculateRectanglePerimeter(rectangleLength, rectangleWidth));

// Test circle calculations
let circleRadius = 3;
console.log("Circle Area:", calculateCircleArea(circleRadius));
console.log("Circle Circumference:", calculateCircleCircumference(circleRadius));
