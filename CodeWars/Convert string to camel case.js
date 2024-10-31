// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str) {
    let arr = str.split(/[-_]/);
    let newArr = [arr[0]];
    let newStr = "";

    for (let i = 1; i < arr.length; i++) {
        newStr = arr[i];
        newStr = newStr[0].toUpperCase() + newStr.slice(1);
        newArr.push(newStr);
    }
    return newArr.join("");
}

console.log(toCamelCase("the_stealth_warrior"));
console.log(toCamelCase("The_Stealth_Warrior"));
console.log(toCamelCase("The_Stealth-Warrior"));
