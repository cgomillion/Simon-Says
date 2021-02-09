console.log('Testing console')

// need variables for the level, an array for the userInput and simonInput
let userLevel = 0
let userInput = []
let simonInput = []
let colors = [$('.blue'), $('.green'), $('.red'), $('.yellow')]

 // goint to try and use jquery
    // need a function to get random (Simons) colors, increments with level to start.
    $(".startButton").click( () => {
    console.log('clicked registered') 
    userLevel++
    $('.count').text(`Level : ${userLevel}`)
    for (let i = 0; i <= userLevel; i++) {
    let randomNum = Math.floor(Math.random * 4)
        let simonColor = []
        simonColor.push(colors[randomNum])

        // need a function to turn the colors grey, then turn back
        
        let logSimon = () => {
            $(simonColor[i]).addClass('.active')
            setTimeout(() => {

            },500)
            $(simonColor[i]).removeClass('.active')
        }
        // need a function to log the users input
        logSimon()
    }   
})
    // needs to start on the click of the Start button, => .startButton
    // $(".startButton").click( () => {
    //     console.log('clicked registered') 
    //     logSimon()
        
    // })





 

// check it to Simons if wrong game over



