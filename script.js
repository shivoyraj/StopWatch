var isbreak = true;
var intervalId;

function startCounting(){
    if(!isbreak){   // sense continuously if stop button is clicked or not
        var timeElement = document.getElementsByClassName("time")[0].innerHTML;
        var stamp = timeElement.split(":")
        if(Number(stamp[2])<99){            // if time count is less then 10 milisecond then increase by 1 
            stamp[2] = Number(stamp[2]) + 1
            if(Number(stamp[2])<=9)
                stamp[2] = "0"+stamp[2]
        }
        else if(Number(stamp[1])<59){   // else if time count is less than 59 sec then increase second by 1
            stamp[2] = "00"             // reset milisecond counter
            stamp[1] = Number(stamp[1]) + 1
            if(Number(stamp[1])<=9)
                stamp[1] = "0"+stamp[1]
        }
        else{                           // else time count become 60 sec then increase minute by 1
            stamp[1] = "00"             // reset minute counter
            stamp[0] = Number(stamp[0]) + 1  
            if(Number(stamp[0])<=9)
                stamp[0] = "0"+stamp[0]     
        }
        document.getElementsByClassName("time")[0].innerHTML = stamp.join(":")
    }
}

//this function will toggle start/stop button
function start_stop(){
    if(isbreak){        // timer is stop and need to start
        isbreak = false
        intervalId = setInterval(startCounting,10)
        document.getElementById("toggle").innerHTML = "Stop"
    }
    else{               // timer is on and need to stop
        isbreak = true
        clearTimeout(intervalId)
        document.getElementById("toggle").innerHTML = "Start"
    }
}

// clear the timer
function reset(){
    isbreak = true
    document.getElementsByClassName("time")[0].innerHTML = "00:00:00"
    document.getElementById("toggle").innerHTML = "Start"
}