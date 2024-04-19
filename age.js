let age = 40; 

let ageGroup;

if (age < 13) {
    ageGroup = "Child";
} 
else if (age >= 13 && age <= 19) {
    ageGroup = "Teenager";
} 
else if (age >= 20 && age <= 59) {
    ageGroup = "Adult";
} 
else {
    ageGroup = "Senior";
}

console.log("The person is " + age + " years old and belongs to the " + ageGroup + " age group.");