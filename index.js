
/* Play event */
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

    document.querySelectorAll("button")[i].addEventListener('click', function() {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);

    });
}
/* Call function to determine which key was pressed and play corresponding sound*/
document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

/* Function to determine which key was pressed */
function makeSound(key) {
    switch (key) {
        case "w":
        case "W":
            var crash = new Audio('sounds/crash.mp3')
            crash.play();
            break;
        case "a":
        case "A":
            var kick_bass = new Audio('sounds/kick-bass.mp3')
            kick_bass.play();
            break;
        case "s":
        case "S":
            var snare = new Audio('sounds/snare.mp3')
            snare.play();
            break;
        case "d":
        case "D":
            var tom_1 = new Audio('sounds/tom-1.mp3')
            tom_1.play();
            break;
        case "j":
        case "J":
            var tom_2 = new Audio('sounds/tom-2.mp3')
            tom_2.play();
            break;
        case "k":
        case "K":
            var tom_3 = new Audio('sounds/tom-3.mp3')
            tom_3.play();
            break;
        case "l":
        case "L":
            var tom_4 = new Audio('sounds/tom-4.mp3')
            tom_4.play();
            break;
        default:

            console.log("Mistaken key")
    }
}

/* Animation feedback when key was pressed */
function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.toggle("pressed");
    setTimeout(function() {
        activeButton.classList.toggle("pressed");
    }, 100)
}

/* Web-Page Easter egg */
document.querySelector(".panda").addEventListener("click", function() {
    for (var e = 0; e < 6; e++) {
        var crash = new Audio('sounds/crash.mp3')
        crash.play();
        var snare = new Audio('sounds/snare.mp3')
        var kick_bass = new Audio('sounds/kick-bass.mp3')
        var tom_1 = new Audio('sounds/tom-1.mp3')
        var tom_2 = new Audio('sounds/tom-2.mp3')
        var tom_3 = new Audio('sounds/tom-3.mp3')
        var tom_4 = new Audio('sounds/tom-4.mp3')
        
        setTimeout(function(){
        	kick_bass.play();
        	setTimeout(function(){
        		snare.play();
        		setTimeout(function(){
        			tom_1.play();
        			setTimeout(function(){
        				tom_2.play();
        				setTimeout(function(){
        					tom_3.play();
        					setTimeout(function(){
        						tom_4.play();
        					},250)
        				},250)
        			},250)
        		},250)
        	},250)
        }, 250)
        
        
        
    }
})
//