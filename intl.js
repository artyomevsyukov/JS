let animals = ["тигр", "ёж", "енот", "ехидна", "АИСТ", "ЯК"];

// ... ваш код ...

let collator = new Intl.Collator();

animals.sort((a, b) => collator.compare(a, b));

console.log(animals); // АИСТ,ёж,енот,ехидна,тигр,ЯК
