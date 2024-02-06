// describe("pow", function () {
//     it("2 в степени 3 будет 8", function () {
//         assert.equal(pow(2, 3), 8);
//     });

//     it("3 в степени 3 будет 27", function () {
//         assert.equal(pow(3, 3), 27);
//     });
// });

describe("grup", function () {
    it("Возвраащет группу массивов", function () {
        let arr = [4, 1, 3, 3, 9, 3, 2, 4];
        assert.equal(grup(arr), [[4, 4], [1], [3, 3, 3], [9], [2]]);
    });
});
