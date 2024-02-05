function hello(name) {
    let phrase = `Hello, ${name}!`;
    for (let i = 0; i < 5; i++) {
        console.log("value,", i);
    }
    say(phrase);
}

function say(phrase) {
    console.log(`** ${phrase} **`);
}

hello("Max");
