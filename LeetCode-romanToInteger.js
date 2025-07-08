// Enter the list or any one roman number that you want to convert to integer 
romanNumber=[];
const lookup = {
                    'I':1, 
                    'V':5, 
                    'X':10,
                    'L':50,
                    'C':100,
                    'D':500,
                    'M':1000
                   };
romanNumber.forEach(function(s) {
    let sum=0;
    for(let i=0;i<s.length;i++)
    {
        if(s.length>1 & lookup[s[i+1]]>lookup[s[i]])
        {
            sum=sum+lookup[s[i+1]]-lookup[s[i]];
            i=i+1;
        }
        else{
            sum=sum+lookup[s[i]];
        }
    }
    console.log(s+':'+sum);
});
