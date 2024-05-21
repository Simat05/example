// Global variable to store account balance
let accountBalance = 1000;

// Function to deposit money
function deposit(depositAmount) {
    // Adding deposit amount to the account balance
    accountBalance += depositAmount;

    // Printing message with deposit amount and new balance
    console.log(`Deposited: $${depositAmount}`);
    console.log(`New Balance: $${accountBalance}`);
}

// Function to withdraw money
function withdraw(withdrawalAmount) {
    // Checking if withdrawal amount is less than or equal to account balance
    if (withdrawalAmount <= accountBalance) {
        // Subtracting withdrawal amount from the account balance
        accountBalance -= withdrawalAmount;
        console.log(`Withdrawn: $${withdrawalAmount}`);
        console.log(`New Balance: $${accountBalance}`);
    } else {
        console.log("Insufficient funds. Withdrawal canceled.");
    }
}

// Function to view account balance
function viewBalance() {
    console.log(`Current Balance: $${accountBalance}`);
}

// Example usage:
console.log("Initial Balance:");
viewBalance(); // Display initial balance

deposit(500); // Deposit $500
withdraw(200); // Withdraw $200
viewBalance(); // Display updated balance

withdraw(1500); // Try to withdraw $1500 (insufficient funds)
viewBalance(); // Display balance after failed withdrawal