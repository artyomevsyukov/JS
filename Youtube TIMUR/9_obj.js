{
    const basket = {
        Laptop: 1500,
        Keybord: 100,
        HDMI: 10,
    };

    const key = "Mouse";
    basket[key] = 25;

    console.log(basket);

    function calculateTotal(obj) {
        let sum = 0;
        for (const price of Object.values(basket)) {
            sum += price;
        }
        // console.log(sum);
        return sum;
    }

    // const addTotal = (obj) => {
    //     obj.total = calculateTotal(obj);
    // };
    // const addTotal = (obj) => {
    //     return { ...obj, total: calculateTotal(obj) };
    // };
    const goodsTotal = (goods) => {
        return { goods, total: calculateTotal(goods) };
    };
    const order = goodsTotal(basket);
    console.log(order);
    console.log(basket);
    console.log({ basket });
}

// {
//     const basket1 = [{ Laptop: 1500 }, { Keybord: 100 }, { HDMI: 10 }];
//     const key = "Mouse";
//     basket1.push({ [key]: 25 });

//     console.log(basket1);

//     function calculateTotalArr(obj) {
//         return obj.reduce((total, item) => (total += +Object.values(item)), 0);
//     }

//     const addTotal = (obj) => {
//         return (obj.total = calculateTotalArr(obj));
//     };
//     // const addTotal = (obj) => {
//     //     return { ...obj, total: calculateTotalArr(obj) };
//     // };
//     const order = addTotal(basket1);
//     console.log(order);
//     console.log(basket1);
// }
