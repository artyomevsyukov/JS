const phone = "  +7(910) 323-53-56   ";
const num1 = "89102345311";
const num2 = "+79113234455";
const num3 = "+7(910)1234567";
const num4 = "+7(910) 323-53-56";
const num5 = "  +7(910) 323-53-56   ";

const numError1 = "8910234";
const numError2 = "+8d910d323-24-21";
const numError3 = "9+7911323445";
const numError4 = "8103g35356";
function checkFoneNumber(phone) {
    // phone = phone.trim();
    phone = phone
        .split("")
        .filter(
            (item) =>
                item == "+" ||
                item == "1" ||
                item == "2" ||
                item == "3" ||
                item == "4" ||
                item == "5" ||
                item == "6" ||
                item == "7" ||
                item == "8" ||
                item == "9" ||
                item == "0"
        )
        .join("");
    console.log("Было:", phone);
    phone = phone.replaceAll("+7", "8");
    console.log("Стало:", phone);
    if (phone[0] != "8" || phone.length != "11") {
        // console.log(phone[0]);
        console.log(`${phone} Error\n`);
    } else {
        return phone, console.log(`${phone} true\n`);
    }
}
checkFoneNumber(phone);
checkFoneNumber(num1);
checkFoneNumber(num2);
checkFoneNumber(num3);
checkFoneNumber(num4);
checkFoneNumber(num5);

checkFoneNumber(numError1);
checkFoneNumber(numError2);
checkFoneNumber(numError3);
checkFoneNumber(numError4);
// phone.trim();
// console.log(phone);

/* 
проверка длинны после 
slice
убрать все пробелы - ()
проверка на буквы

*/
