// getDiscount.js
function getDiscount(amount, coupon, lvl) {
    if (!coupon) {
        return 0; // Если купон не указан, скидка 0
    }

    let discount = 0;

    if (coupon.type === "PERCENTAGE") {
        discount = amount * (coupon.value / 100);
    } else if (coupon.type === "FIXED") {
        discount = coupon.value;
    }

    return discount >= amount ? amount : discount; // Скидка не может превышать сумму
}

export default getDiscount;
