
let age = 18; 
let hasDiploma = false; 
let examScore = 85; 

let isEligible = age >= 18 && hasDiploma && examScore >= 80;

if (isEligible) {
    console.log("The student is eligible for admission.");
} 
else {
    console.log("The student is not eligible for admission.");
}