

// // main function definition

// (function() {

// // main array definition

// var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

// for (var i = 0; i < names.length; i++){ // loop nested in function to iterate through the array


//     if (){ // conditional branching to check for j
//     } else {
//         speakHi.speak(names[i]) // otherwise, script says hi to the name
//     }
    
// } 
// })();   

(function() {
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    for (var i = 0; i < names.length; i++) {
        var is_j = names[i].charAt(0).toLowerCase();
        if (is_j === 'j') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();