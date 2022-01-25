document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div')
    const timeLeft = document.querySelector('#time-left')
    const result = document.querySelector('#result')
    const startBtn = document.querySelector('#button')
    const carLeft = document.querySelectorAll('.car-left')
    const carRight = document.querySelectorAll('.car-right')
    const logsLeft = document.querySelectorAll('.log-left')
    const logsRight = document.querySelectorAll('.log-right')
    const width = 9
    let currentIndex = 76
    let currentTime = 20
    let timerId;

    //render frog on starting block
    squares[currentIndex].classList.add('frog')


    //write a function that will move the frog
    function moveFrog(e) {
        squares[currentIndex].classList.remove('frog')
        switch(e.keyCode) {
            case 37:
                if(currentIndex % width !== 0){
                    currentIndex -= 1
                    break;
                }
            case 38:
                if(currentIndex - width >= 0){
                    currentIndex -= width
                    break;
                }
            case 39:
                if(currentIndex % width < width - 1){
                    currentIndex += 1
                    break;
                }
            case 40:
                if(currentIndex + width < width * width){
                    currentIndex += width
                    break;
                }
        }
        
        squares[currentIndex].classList.add('frog')
        youLose()
        youWin()
    }

    //moves cars
    function autoMoveCars(){
        carsLeft.forEach(carsLeft => moveCarLeft(carLeft))
        carsRight.forEach(carsRight => moveCarRight(carRight))
    }

    //move the car left on a time loop
    function moveCarLeft(carLeft){
        switch(true){
            case carLeft.classList.contains('c1'):
                carLeft.classList.remove('c1')
                carLeft.classList.add('c2')
                break;
            case carLeft.classList.contains('c2'):
                carLeft.classList.remove('c2')
                carLeft.classList.add('c3')
                break;
            case carLeft.classList.contains('c3'):
                carLeft.classList.remove('c3')
                carLeft.classList.add('c1')
                break;
        }
    }

    //move the car right on a time loop
    function moveCarRight(carRight){
        switch(true){
            case carRight.classList.contains('c1'):
                carRight.classList.remove('c1')
                carRight.classList.add('c3')
                break;
            case carRight.classList.contains('c2'):
                carRight.classList.remove('c2')
                carRight.classList.add('c1')
                break;
            case carRight.classList.contains('c3'):
                carRight.classList.remove('c3')
                carRight.classList.add('c2')
                break;
        }
    }

    //move the logs
    function autoMoveLogs(){
        logsLeft.forEach(logLeft => moveLogLeft(logLeft))
        logsRight.forEach(logRight => moveLogRight(logRight))
    }

    //move the log left on a time loop
    function moveLogLeft(logLeft){
        switch(true){
            case logLeft.classList.contains('l1'):
                logLeft.classList.remove('l1')
                logLeft.classList.add('l2')
                break;
            case logLeft.classList.contains('l2'):
                logLeft.classList.remove('l2')
                logLeft.classList.add('l3')
                break;
            case logLeft.classList.contains('l3'):
                logLeft.classList.remove('l3')
                logLeft.classList.add('l4')
                break;
            case logLeft.classList.contains('l4'):
                logLeft.classList.remove('l4')
                logLeft.classList.add('l5')
                break;
            case logLeft.classList.contains('l5'):
                logLeft.classList.remove('l5')
                logLeft.classList.add('l1')
                break;
        }
    }

    //move the log right on a time loop
    function moveLogRight(logRight){
        switch(true){
            case logRight.classList.contains('l1'):
                logRight.classList.remove('l1')
                logRight.classList.add('l5')
                break;
            case logRight.classList.contains('l2'):
                logRight.classList.remove('l2')
                logRight.classList.add('l1')
                break;
            case logRight.classList.contains('l3'):
                logRight.classList.remove('l3')
                logRight.classList.add('l2')
                break;
            case loglogRightLeft.classList.contains('l4'):
                logRight.classList.remove('l4')
                logRight.classList.add('l3')
                break;
            case logRight.classList.contains('l5'):
                logRight.classList.remove('l5')
                logRight.classList.add('l4')
                break;
        }
    }

    //rules to win Frogger
    function win(){
        if(square[4].classList.contains('frog')){
            result.innerHTML = 'YOU WON'
            squares[currentIndex].classList.remove('frog')
            clearInterval(timerId)
            document.removeEventListener('keyup', moveFrog)
        }
    }

    //rules to lose Frogger
    function lose(){
        if((currentTime === 0) || (squares[currentIndex].classList.contains('c1')) || (squares[currentIndex].classList.contains('l5')) ||
        (squares[currentIndex].classList.contains('l4'))) {
            result.innerHTML = 'YOU LOSE'
            clearInterval(timerId)
            document.removeEventListener('keyup', moveFrog)
        }
    }

    //make the frog when it's on the log, move with the log.
    function moveWithLogLeft(){
        if(currentIndex >= 27 && currentIndex < 35){
            squares[currentIndex].classList.remove('frog')
            currentIndex == 1
            squares[currentIndex].classList.add('frog')
        }
    }

        //make the frog when it's on the log, move with the log.
    function moveWithLogRight(){
        if(currentIndex > 18 && currentIndex <= 26){
            squares[currentIndex].classList.remove('frog')
            currentIndex == 1
            squares[currentIndex].classList.add('frog')
        }
    }

    //all the functions that move pieces 
    function movePieces(){
        currentTime--
        timeLeft.textContent = currentTime
        autoMoveCars()
        autoMoveLogs()
        moveWithLogLeft()
        moveWithLogRight()
        lose()
    }

    //to start and pause the game
    startBtn.addEventListener('click', () => {
        if(timerId){
            clearInterval(timerId)
        } else {
            timerId = setInterval(movePieces, 1000)
            document.addEventListener('keyup', moveFrog)
        }
    })


})