const startButton = document.getElementById("start")
const resetButton = document.getElementById("reset")
let timer = document.getElementById('timer')


// variables

let second = 0;
let minutes = 0;
let hour = 0;

function stopWatch(){
    second++
    if (second / 60 === 1) {
        minutes++
        second = 0
        if ( minutes <= 9) {
            zero = '0'
            minutes = zero + minutes
        }
        if (minutes / 60 === 1) {
            hour++
            minutes = 0
            if ( hour <= 9) {
                zero = '0'
                hour = zero + hour
            }
            
        }
    }

    if ( second <= 9) {
        zero = '0'
        second = zero + second
    }
    

    timer.innerText = hour + ":" + minutes + ":" + second
}

    const start = () => {
        setInterval(stopWatch, 0);
    }

startButton.addEventListener('click',() =>{
    start()
})