// Declare Variables
let Total_Bill = 954; 
let Total_People = 6; 
let tip_persent= 10; 
let tax_persent = 15; 

let tip_Amount = (Total_Bill * tip_persent) / 100;
let tax_Amount = (Total_Bill * tax_persent) / 100;
let total_Payment = Total_Bill + tip_Amount + tax_Amount;
let individual_Payment = total_Payment / Total_People;

console.log("Original Bill: $" + Total_Bill);
console.log("Total Tip: $" + tip_Amount);
console.log("Total Tax : $" + tax_Amount);
console.log("Total Amount: $" + total_Payment);
console.log("Each Person Needs to Pay: $" + individual_Payment);