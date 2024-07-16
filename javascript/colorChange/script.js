

function randomColor() {
    const hex = "0123456789ABCDEF";
    let color = "#";
    //we need to generate a random number six times
    for ( let i=0; i<6; i++) {
        let index = Math.floor(Math.random()*16);
        color += hex[index]
    }
    return color;
}

function changeColor() {
    document.body.style.backgroundColor = randomColor();
}

function main() {
    //so we need to have a random color function
    //then we need to do dom manipulation
    let start = document.querySelector("#start-button");
    let stop = document.querySelector("#stop-button");
    let changeColorContinuosly;
    const startChangingColor = function() {
        if (!changeColorContinuosly) {
            changeColorContinuosly = setInterval(()=>{
                changeColor();
            },100);
        }
    }
    const stopChangingColor = function() {
        if (changeColorContinuosly) {
            clearInterval(changeColorContinuosly);
            changeColorContinuosly = null;
        }
    }
    start.addEventListener("click",startChangingColor);
    stop.addEventListener("click",stopChangingColor);
}
main()