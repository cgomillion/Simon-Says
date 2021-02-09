console.log('Testing console')

// need variables for the level, an array for the userInput and simonInput
let userLevel = $('.count')
let userInput = []
let simonInput = []
let colors = [$('.blue'), $('.green'), $('.red'), $('.yellow')]

$( () =>  { // goint to try and use jquery
    // need a function to get random (Simons) colors, increments with level to start.
    userLevel++
    for (let i = 0; i <= userLevel; i++) {
    let randomNum = Math.floor(Math.random * 4)
        let simonColor = colors[randomNum]

        // need a function to turn the colors grey, then turn back
        
        let logSimon() = function() {
            $(simonColor).addClass('active')
            setTimeout(() => {

            },500)
            $(simonColor).removeClass('active')
        }
        // need a function to log the users input
        let logUser
    }   

    // needs to start on the click of the Start button, => .startButton
    $(".startButton").click( () => {
        console.log('clicked registered') 
        
        
    })





 

// check it to Simons if wrong game over



})