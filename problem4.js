function romanNumerals(value){
    const romania = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    }

    let result = ''
    for (const roman of Object.keys(romania)){
        let counter = Math.floor(value / romania[roman]);
        value -= counter * romania[roman];
        result += roman.repeat(counter);

    }
    return result
}


console.log(romanNumerals(6))    // VI
console.log(romanNumerals(9))    // IX
console.log(romanNumerals(23))   // XXIII
console.log(romanNumerals(2021)) // MMXXI
console.log(romanNumerals(1646)) // MDCXLVI
