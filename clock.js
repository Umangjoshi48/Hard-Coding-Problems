//The following code does the work of a clock. It iterates automatically after every seconds and then make changes to minute and hour accordingly.
const now = new Date();
let hours=now.getHours();
let minutes=now.getMinutes()+1;
let seconds=now.getSeconds()+1;
console.log(now);
setInterval(function() 
{
  console.log(hours.toString().padStart(2, '0')+':'+minutes.toString().padStart(2, '0')+':'+seconds.toString().padStart(2, '0'));
  console.log((hours% 12 || 12).toString().padStart(2, '0')+':'+minutes.toString().padStart(2, '0')+':'+seconds.toString().padStart(2, '0')+ ' ' + (hours >= 12 ? 'PM' : 'AM'));
  if(seconds==59)
  {
    seconds=0;
    if(minutes==59)
    {
        minutes=0;
        if(hours==23)
        {
            hours=0;
        }
        else
        {
            hours++;
        }
    }
    else
    {
        minutes++;
    }
  }
  else
  {
    seconds++;
  }
}, 1000);
