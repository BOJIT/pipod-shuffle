var base = document.createElement; /* A backup reference to the browser's original document.createElement */

var MediaElements = [];

timeout();

/* Replacing the DOM's original reference to the browser's createElement function */
document.createElement = function(message) {
    var element = base.apply(this, arguments); 
    
    if(message == 'video' || message == 'audio') {
        MediaElements.push(element); /* Arrays hold references not copies by default in javascript. */
        console.log(element);
    }

    return element
};

function changeSpeed(val) {
    for(var i = 0; i < MediaElements.length; i++){ /* change speed for all elements found (i havent seen this be more than 1 but you never know) */
        MediaElements[i].playbackRate = val; /* set the playback rate here */
        if(val != 64){ /* update the lastSpeed if the speed actually changed */
            lastSpeed = val;
        }
    }
}

function timeout() { /* This function is called by itself over and over */
    setTimeout(function () { /* setTimeout is a delayed call(500 milliseconds) to the code below */
        try {
            changeSpeed(2); /* this is in a try/catch because if an error happens timeout wouldnt be called again. */
        }catch{
            
        }
        timeout(); /* call timeout again which starts the loop and eventually it will come back here */
    }, 500); /* 500ms */
}
