function validateNumber(input) {
    const regex = /^\d+$/;
    return regex.test(input);
}

console.log(validateNumber("123")); // true
console.log(validateNumber("abc")); // false
console.log(validateNumber("12a")); // false
console.log(validateNumber("12 34")); // false
console.log(validateNumber("-23")); // false
console.log(validateNumber("23.234")); // false
