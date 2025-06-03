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
        if (num == 0) {
            throw new Error("please enter a number greater than 0");
        }
        this.result = this.result / num;
        return this.result;
    }
    getResult() {
        return this.result;
    }
    updateResult(num) {
        this.result = num;
    }
    clear() {
        this.result = 0;
    }
    calculate(str) {
        let countOpening = 0;
        let countClosing = 0;
        for (let i = 0; i < str.length; i++) {
            if (countClosing > countOpening) {
                throw new Error("invalid input as there is a closing bracket before an opening one")
            }
            if (str[i] == "(") {
                countOpening++;
            }
            else if (str[i] == ")") {
                countClosing++;
            }
        }
        if (!(countOpening == countClosing)) {
            throw new Error("One parenthesis is missing");
        }
        let strArray = [];
        for (let i = 0; i < str.length; i++) {
            if (str[i] == " ") {
                continue;
            }
            else {
                if (!isNaN(parseInt(str[i]))) {
                    let range = 1;
                    let toPushString;
                    while (true) {
                        if (!isNaN(parseInt(str[i + range])) || str[i + range] == '.') {
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
                        toPushString = str.slice(i, i + range);
                        i = i + range - 1;
                    }
                    strArray.push(toPushString);
                }
                else {
                    if (!['(', ')', '+', '-', '*', '/'].includes(str[i])) {
                        throw new Error("entered an alphabet instead of a number");
                    }
                    strArray.push(str[i]);
                }
            }
        }
        this.convertExpression(strArray);
    }
    convertExpression(expression) {
        let postFix = [];
        let stack = [];
        let associativityObject = {
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
        for (let i = 0; i <= stack.length; i++) {
            postFix.push(stack.pop());
        }
        this.calculateExpression(postFix);
    }
    calculateExpression(postFix) {
        let stack = [];
        for (let i = 0; i < postFix.length; i++) {
            if (!isNaN(parseInt(postFix[i]))) {
                stack.push(postFix[i]);
            }
            else {
                let operand2 = parseFloat(stack.pop());
                let operand1 = parseFloat(stack.pop());
                stack.push(this.operation(postFix[i], operand1, operand2));
            }
        }
    }
    operation(operator, operand1, operand2) {
        let result;
        this.updateResult(operand1);
        switch (operator) {
            case '+':
                result = this.add(operand2);
                break;
            case '-':
                result = this.subtract(operand2);
                break;
            case '*':
                result = this.multiply(operand2);
                break;
            case '/':
                result = this.divide(operand2);
                break;
            default:
                console.log("not a valid operand");
        }
        return result;
    }
}
module.exports = Calculator;
