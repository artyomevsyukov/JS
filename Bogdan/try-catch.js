const fnError = () => {
    throw new Error("Some error");
};

try {
    fnError();
} catch (error) {
    // console.error(error);
    console.log(error.message);
}
console.log("Continue...");
