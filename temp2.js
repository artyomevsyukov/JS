const days = [
    { comment: "Первый подход всегда даётся тяжело" },
    { comment: "Второй день уже проще" },
];

for (const cc in days) {
    console.log(days[cc].comment);
    console.log(cc);
}
