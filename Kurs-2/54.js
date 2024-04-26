user1 = {
    name: "Vasia",
    brithday: "04/26/2024",
};
user2 = {
    name: "Vasia",
    brithday: "04/22/2024",
};

function isBrithday(user) {
    const brithdayDate = new Date(user.brithday);
    console.log(brithdayDate);
    const now = new Date();
    console.log(now);

    if (brithdayDate.getMonth() !== now.getMonth()) {
        console.log("Month");
        return false;
    }
    if (brithdayDate.getDate() !== now.getDate()) {
        console.log("date");
        return false;
    }
    console.log("true");
    return true;
}
isBrithday(user1);
isBrithday(user2);
