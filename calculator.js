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
                if (!isNaN(parseInt(str[i]))) {
                    let range = 1;
                    let toPushString
                    while (true) {
                        if (!isNaN(parseInt(str[i + range]))) {
                            range++;
                        }
                        else {
                            break;
                        }
                    }
                    if (range == 1) {
                        toPushString = str[i];
                    }
                    else {
                        toPushString = str.slice(i, range);
                        i = i + range;
                    }
                    strArray.push(toPushString);
                }
                else {
                    strArray.push(str[i]);
                }

            }

        }
        console.log(strArray);
        convertExpression(strArray);
    }
}
function convertExpression(expression) {
    let postFix = [];
    let stack = [];
    associativityObject = {
        '+': 1,
        '-': 1,
        '*': 2,
        '/': 2
    }
    for (let i of expression) {
        if (!isNaN(parseInt(i))) {
            postFix.push(i);
        }
        else {
            let lastElement = stack.at(-1);
            if (stack.length == 0 || i == '(' || lastElement == '(') {
                stack.push(i);
            }
            else {
                if (i == ')') {
                    while (true) {
                        postFix.push(stack.pop());
                        lastElement = stack.at(-1);
                        if (lastElement == undefined || lastElement == '(') {
                            break;
                        }
                        else {
                            continue;
                        }
                    }
                    stack.pop();
                }
                else {
                    if (associativityObject[lastElement] > associativityObject[i]) {
                        while (true) {
                            postFix.push(stack.pop());
                            lastElement = lastElement = stack.at(-1);
                            if (associativityObject[lastElement] >= associativityObject[i]) {
                                continue;
                            }
                            else {
                                break;
                            }
                        }
                        stack.push(i);
                    }
                    else {
                        stack.push(i);
                    }
                }
            }
        }
    }
    postFix.push(stack.pop());
    postFixString=postFix.join("");
    console.log(postFixString);
}
const calc = new Calculator(0);
console.log(`10 +   2 *    (   6 - (4 + 1) / 2) + 7`);
Calculator.calculate(`10 +   2 *    (   6 - (4 + 1) / 2) + 7`);
// console.log(calc.getResult()); 
