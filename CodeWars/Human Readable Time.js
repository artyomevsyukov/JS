// https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript

// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

function humanReadable(seconds) {
    const formatTime = (x) => (x < 10 ? "0" + x : x);

    if (seconds < 0) return;
    if (seconds == 0) return "00:00:00";

    let hours = formatTime(Math.trunc(seconds / 60 / 60));
    // if (hours < 10) hours = "0" + hours;

    let mins = formatTime(Math.trunc((seconds / 60) % 60));
    // if (mins < 10) mins = "0" + mins;

    let secs = formatTime(Math.trunc(seconds % 60));
    // if (secs < 10) secs = "0" + secs;

    // const template = "h:m:s";
    // let output = template
    //     .replace("h", hours)
    //     .replace("m", mins)
    //     .replace("s", secs);

    // console.log(output);
    // return output;

    console.log(`${hours}:${mins}:${secs}`);

    return `${hours}:${mins}:${secs}`;
}

humanReadable(0); //, '00:00:00'
humanReadable(59); //, '00:00:59'
humanReadable(60); //, '00:01:00'
humanReadable(90); //, '00:01:30'
humanReadable(3599); //, '00:59:59'
humanReadable(3600); //, '01:00:00'
humanReadable(45296); //, '12:34:56'
humanReadable(86399); //, '23:59:59'
humanReadable(86400); //, '24:00:00'
humanReadable(359999); //, '99:59:59'
