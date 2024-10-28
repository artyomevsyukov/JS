export default function calculateTotal(items, coupon) {
    const sum = items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );
    let discount = 0;

    if (coupon && coupon.type === "PERCENTAGE") {
        discount = sum * (coupon.value / 100);
    } else if (coupon && coupon.type === "FIXED") {
        discount = coupon.value;
    }

    const total = sum - discount;
    return total >= 0 ? total : 0;
}

// module.exports = calculateTotal;
