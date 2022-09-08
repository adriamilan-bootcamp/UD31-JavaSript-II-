
res = new Array(12)

for (j = 0; j < res.length; j++) {
    res[j] = 0
}

for (i = 0; i < 36000; i++) {

    dado1 = Math.floor(Math.random() * (6 - 1) + 1)
    dado2 = Math.floor(Math.random() * (6 - 1) + 1)

    res[(dado1 + dado2) - 1]++

}

console.log(res)