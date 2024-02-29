const tasks = ["task 1", "task 2", "task 3"];

function add(task) {
    tasks.push(task);
}
add("task 4");
console.log("add:", tasks);
console.log("index: ", tasks.indexOf("task 4"));

function remove(task) {
    const index = tasks.indexOf(task);
    if (index === -1) {
        return;
    }
    return tasks.splice(index, 1);
}

remove("task 5");
console.log("remove:", tasks);

function prioritize(task) {
    const result = remove(task);
    if (!result) {
        return;
    }
    tasks.unshift(result[0]);
    // const splice = tasks.splice(index, 1);
    // console.log(splice);
    // tasks.unshift(...splice);
}
prioritize("task 3");
console.log("prioritize:", tasks);
