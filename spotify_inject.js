var base = document.createElement; /* A backup reference to the browser's original document.createElement */

var MediaElements = [];
var Iframes = [];

var Doc;

/* Replacing the DOM's original reference to the browser's createElement function */
document.createElement = function(message) {
    var element = base.apply(this, arguments); 
    
    if(message == 'video' || message == 'audio') {
        MediaElements.push(element); /* Arrays hold references not copies by default in javascript. */
    }

    if(message == 'iframe') {
        Iframes.push(element);
    }

    return element
};
