// oldd /////////////////////////////////


// (function(window){ 
//     var helloSpeaker = new Object()
//     var say_hi = "Hello" // hello string is encoded in a variable
//     helloSpeaker.speak = function (name) { 
//         console.log(say_hi, name);
// };

//     window.helloSpeaker = helloSpeaker;

// })(window);

// oldd /////////////////////////////////


(function(window) { // main function definition
 
    var helloSpeaker = new Object(); // function object is created
    var hi = "Hello"; // method to say hi is defined

    helloSpeaker.speak = function(name) { // function to speak
        console.log(hi,  name);
    };

    window.helloSpeaker = helloSpeaker;
})(window);