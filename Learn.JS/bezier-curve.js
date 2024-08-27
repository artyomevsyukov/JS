const points = [
    [0, 0],
    [1, 2],
    [2, 0],
];

function bezierCurve(points) {
    const [p0, p1, p2] = points;
    const result = [];
    for (let t = 0; t <= 1; t += 0.1) {
        let x = (1 - t) ** 2 * p0[0] + 2 * (1 - t) * t * p1[0] + t ** 2 * p2[0];
        let y = (1 - t) ** 2 * p0[1] + 2 * (1 - t) * t * p1[1] + t ** 2 * p2[1];

        result.push({ t: +t.toFixed(1), x: +x.toFixed(3), y: +y.toFixed(3) });
    }
    return result;
}

const curvePoints = bezierCurve(points);
console.log(curvePoints);
