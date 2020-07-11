let seconds=0;
let minutes=0;
let hours=0;

//Define vars to hold display value

let displaySeconds=0;
let displayMinutes=0;
let displayHours;
//Define var to hold set interval function

let interval=null;

//Define var to hold the stop watch status
let status="stopped";
//Stop watch function to increment next value 


function stopWatch()
{

    seconds++;
    //logic to determine when to increment next value

    if(seconds/60==1)
    {
        seconds=0;
        minutes++;
        
    if(minutes/60==1)
    {
        minutes=0;
        hours++;
    }
    
}
//If Seconds/minutes/hours are only one digit.Add a leading zero to the value.

if(seconds<10)
{
    displaySeconds="0"+seconds.toString();
}
else{
    displaySeconds=seconds;
}

if(minutes<10)
{
    displayMinutes="0"+minutes.toString();
}
else{
    displayMinutes=minutes;
}
if(hours<10)
{
    displayHours="0"+hours.toString();
}
else{
    displayHours=minutes;
}

//display updated values to the user

    document.getElementById("display").innerHTML=displayHours+" : " + displayMinutes + " : " + displaySeconds;
}

function startStop()
{
    if(status=="stopped")
    {
        //Start the stop watch by calling the setinteval function
        interval=window.setInterval(stopWatch,1000);
        document.getElementById("startStop").innerHTML="Stop";
        status="started";
    }

    else{
        window.clearInterval(interval);
        document.getElementById("startStop").innerHTML="Start";
        status="stopped";
    }
}

//function to Reset the Stop Watch
function resetStopWatch()
{
    window.clearInterval(interval);

    seconds=0;
    minutes=0;
    hours=0;
    document.getElementById("display").innerHTML="00:00:00";
    document.getElementById("startStop").innerHTML="Start";
}