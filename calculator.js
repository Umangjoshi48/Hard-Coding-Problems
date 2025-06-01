class Calculator {
    constructor(result = 0) {
        this.result = result;
    }
    add(num) {
        this.result = this.result + num;
        return this.result;
    }
    subtract(num) {
        this.result = this.result - num;
        return this.result;
    }
    multiply(num) {
        this.result = this.result * num;
        return this.result;
    }
    divide(num) { 

        if (num==0) 
        {
            throw new Error("please enter a number greater than 0");
        }
        this.result = this.result / num;
        return this.result;
    }
    getResult() {
        return this.result;
    }
    static updateResult(num) {
        this.result = num;
    }
    clear() {
        this.result = 0;
    }
    calculate(str) {
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
                    try {
                        if (!['(', ')', '+', '-', '*', '/'].includes(str[i])) throw "you have entered an alphabet instead of a number";
                        strArray.push(str[i]);
                    }
                    catch (message) {
                        console.log(message);
                    }
                }

            }

        }
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
    calculateExpression(postFix);
}
function calculateExpression(postFix) {
    let stack = [];
    for (let i = 0; i < postFix.length; i++) {
        if (!isNaN(parseInt(postFix[i]))) {
            stack.push(postFix[i]);
        }
        else {
            let operand2 = parseFloat(stack.pop());
            let operand1 = parseFloat(stack.pop());
            stack.push(operation(postFix[i], operand1, operand2));
        }
    }
}
function operation(operator, operand1, operand2) {
    let result;
    Calculator.updateResult(operand1);
    switch (operator) {
        case '+':
            result = calc.add(operand2);
            break;
        case '-':
            result = calc.subtract(operand2);
            break;
        case '*':
            result = calc.multiply(operand2);
            break;
        case '/':
            result = calc.divide(operand2);
            break;
        default:
            console.log("not a valid operand")
    }
    return result;
}
module.exports = Calculator;
