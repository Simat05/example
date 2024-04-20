let score = 99;
let grade;
let isValid = true;
if (score >= 90 && score <= 100){
    grade = "A";
}else if (score >= 80){
    grade = "B";
}else if (score >= 70){
    grade = "C";
}else if (score >= 60 ){
    grade = "D";  
}else if (score >=0){
    grade = "F";
}else{
    isValid = false;
    console.log("You've inserted an incorrect value [" + score + "] please insert the correct score value" );
}
if (isValid = true){
console.log("your test score is " + score + " and your grade is " + grade);
}