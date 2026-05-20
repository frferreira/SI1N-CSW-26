var x = 5;
if (x > 5) {
    console.log("x is greater than 5");
} else if (x < 5){
    console.log("x is less than 5");
} else {
    console.log("x is equal to 5");
}

for (var i = 0; i < 10; i++) {
if (i % 2 === 0) {
    console.log(i);
};
}

for (let i = 0; i < 10; i += 2) {
    console.log(i);
};

for (let i = 1; i < 10; i += 2) {
    console.log(i);
};
var y =0;
while (y < 10) {
    console.log(y);
    y++;
};

y = 1;
while (y < 10) {
    (y % 2 !== 0) ? console.log(y) : null;
    y++;
}