class Calculator {
    constructor(result) {
        this.result = result;
    }
    add(num) {
        this.result = this.result + num;
    }
    subtract(num) {
        this.result = this.result - num;
    }
    multiply(num) {
        this.result = this.result * num;
    }
    divide(num) {
        this.result = this.result / num;
    }
    getResult() {
    }
    static calculate(str) {
        let strArray = [];

        for (let i = 0; i < str.length; i++) {

            if (str[i] == " ") {
                continue;
            }
            else {
                // console.log(str[i]);
                if (typeof parseInt(str[i]) === "number" && typeof parseInt(str[i + 1]) && i < str.length-1) {
                    strArray.push(str[i] + str[i + 1]);
                    i++;
                }
                else {
                    strArray.push(str[i]);
                }
            }

        }
        console.log(strArray);
        // calculateExpression(noSpaceStr);

    }
}
// function calculateExpression(expression) {
//     for (let i of expression) {
//         console.log(i);
//     }
// }
const calc = new Calculator(0);
Calculator.calculate(`10 +   2 *    (   6 - (4 + 1) / 2) + 7`);
// console.log(calc.getResult()); 