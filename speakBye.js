
// (function(window) {

//     var byeSpeaker = new object(); 
//     var bye = "Good Bye"; 

//     byeSpeaker.speak = function speak(name) { 
//         console.log(bye, name);
//     };

//     window.byeSpeaker = byeSpeaker;

// })(window);

(function(window) { // main function definition

    var byeSpeaker = new Object(); // object where function is housed
    var bye= "GoodBye"; // goodbye string is encoded in a variable

    byeSpeaker.speak = function speak(name) { // method to say goodbye is defined
        console.log(bye, name);
    };
    window.byeSpeaker = byeSpeaker;

})(window);