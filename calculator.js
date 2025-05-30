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
            else 
            {
                if (!isNaN(parseInt(str[i])))    
                {
                    let range=1;
                    let toPushString
                    while(true)
                    {
                        if (!isNaN(parseInt(str[i + range])))
                        {
                            range++;
                        }
                        else
                        {
                            break;
                        }
                    }
                    if (range==1)
                    {
                        toPushString=str[i];    
                    }
                    else
                    {
                        toPushString=str.slice(i,range);
                        i=i+range;
                    }
                    strArray.push(toPushString);
                }
                else
                {
                    strArray.push(str[i]);
                }

            }

        }
        convertExpression(strArray);
    }
} 
function convertExpression(expression) 
{
    let postFix=[];
    let stack=[];
    associativityObject={
        '+':1,
        '-':1,
        '*':2,
        '/':2
    }
    for (let i of expression) 
        {
        if (!isNaN(parseInt(i)))
        { 
            postFix.push(i);
        }
        else
        {
            if (stack.length==0)
            {
                stack.push(i);
            }
            else
            {
                let lastElement=stack.at(-1);
                if (['(',')'].includes(lastElement))
                {
                    if (lastElement=='(')
                    {
                        stack.push(i);
                    }
                    else
                    {
                        while(true)
                        {
                            postFix.push(stack.pop());
                            lastElement=stack.at(-1);
                            if (lastElement==undefined || lastElement=='(')                                
                                {
                                    break;
                                }
                            else{
                                continue;
                            }
                        }
                    }
                }
                else
                {
                    while(true)
                    {
                        if (associativityObject[lastElement]>=associativityObject[i])
                        {
                            postFix.push(stack.pop());
                            lastElement=stack.at(-1);
                            if (lastElement==undefined || lastElement=='(')                                
                                {
                                    break;
                                }
                            else{
                                continue;
                            }              
                        }
                        else
                        {
                            stack.push(i)
                            break;
                        }
                           
                    }
                    
                }

            }
        }

    }
    console.log(postFix);
}
const calc = new Calculator(0);
Calculator.calculate(`10 +   2 *    (   6 - (4 + 1) / 2) + 7`);
// console.log(calc.getResult()); 
