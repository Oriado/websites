for (let i = 1; i <= 10; i++) {
    let row = "";
    for (let j = 1; j <= 10; j++) {
        row += (i * j) + "\t";
    }
    console.log(row);
}


for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        let row = "";
        for (let j = 1; j <= 10; j++) {
            row += (i * j) + "\t";
        }
        console.log(row);
    }
}

for (let i = 1; i <= 10; i++) {
    let row = "";
    for (let j = i; j <= 10; j++) {
        row = row.concat(i, "x", j, "=", i * j, "\t");
    }
    console.log(row);
}