/*
The below code increase the counter by one everytime a second passes by without using set setInterval function but instead by using setTimeout and also by using async, await and promises.
*/ 
async function Main()
{
    let counter=0;
    for (let i = 0; i < 1; i--) 
    {
        let a = await new Promise((resolve) => {
        console.log("Inside the promise");
        setTimeout(() => {
            console.log("Inside setTimeout");
            resolve(0);
        }, 1000);
        });
        if (a == 0) {
            console.log("a second has passed");
            counter++;
        }
        console.log(counter);
    }
}
Main();
