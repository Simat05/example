// Named Function Expression: calculateDiscountPrice
const calculateDiscountPrice = function calculateDiscountPrice(originalPrice, discountPercentage) {
    const discountAmount = (discountPercentage / 100) * originalPrice;
    const discountedPrice = originalPrice - discountAmount;
    return discountedPrice;
};

// Anonymous Function with Callback
const applyDiscount = function(originalPrice, discountPercentage, callback) {
    const discountAmount = (discountPercentage / 100) * originalPrice;
    const discountedPrice = originalPrice - discountAmount;
    callback(discountedPrice);
};

// Example 1: Using Named Function Expression
const originalPrice1 = 100;
const discountPercentage1 = 20;
const discountedPrice1 = calculateDiscountPrice(originalPrice1, discountPercentage1);
console.log(`Discounted Price 1: ${discountedPrice1}`);

// Example 2: Using Anonymous Function with Callback
const originalPrice2 = 50;
const discountPercentage2 = 10;

applyDiscount(originalPrice2, discountPercentage2, function(discountedPrice) {
    console.log(`Discounted Price 2: ${discountedPrice}`);
});