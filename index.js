// Your code here

// document.addEventListener("keydown", function(e){
//     console.log(e);
// })
const dodger = document.getElementById('dodger');

function moveDodgerLeft() {
    //moves the DODGER to the left:
    const leftNumbers = dodger.style.left.replace("px", "")
    const left = parseInt(leftNumbers, 10)

    if(left > 0){
    dodger.style.left = `${left - 1}px`;
    }
}
// moveDodgerLeft()

document.addEventListener("keydown", function(e){
    if(e.key == "ArrowLeft"){
    moveDodgerLeft()
    }
})

function moveDodgerRight() {
    //moves the DODGER to the right:
    const rightNumbers = dodger.style.left.replace('px', "");
    const right = parseInt(rightNumbers, 10);

    if(right > 0 && right < 360){
        dodger.style.left = `${right + 1}px`;
    }

}

document.addEventListener("keydown", function(e){
    if(e.key == "ArrowRight"){
        moveDodgerRight()
    }
})

function moveDodgerUp(){
    //moves the Dodger upwards
    const upNumbers = dodger.style.bottom.replace("px", "")
    const dodgerUp = parseInt(upNumbers, 10)
    // console.log(dodgerUp);

    if(dodgerUp >= 0 && dodgerUp < 380){
        dodger.style.bottom = `${dodgerUp + 1}px`;
        console.log(dodger.style.bottom);

    }
}

document.addEventListener("keydown", function(e){
    if(e.key == "ArrowUp"){
        moveDodgerUp()
    }
})

function moveDodgerDown(){
    //moves the Dodger downwards
    const downNumbers = dodger.style.bottom.replace("px", "")
    const dodgerDown = parseInt(downNumbers, 10)
    // console.log(dodgerUp);

    if(dodgerDown > 0){
        dodger.style.bottom = `${dodgerDown - 1}px`;
        console.log(dodger.style.bottom);

    }
}

document.addEventListener("keydown", function(e){
    if(e.key == "ArrowDown"){
        moveDodgerDown()
    }
})