function randomeTimeout() {
    let randomTime = Math.ceil(Math.random()*7);
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve();
        },randomTime*1000);
    })
}

async function hackerTerminal() {
    let text = document.createElement("p");
    text.textContent = "Initializing hacking";
    text.appendChild(dots);
    container.appendChild(text);
    await randomeTimeout();

    text = document.createElement("p");
    text.textContent = "Reading your files";
    text.appendChild(dots);
    container.appendChild(text);
    await randomeTimeout();

    text = document.createElement("p");
    text.textContent = "Password files detected";
    text.appendChild(dots);
    container.appendChild(text);
    await randomeTimeout();

    text = document.createElement("p");
    text.textContent = "Sending all password files to server";
    text.appendChild(dots);
    container.appendChild(text);
    await randomeTimeout();

    text = document.createElement("p");
    text.textContent = "Cleaning all files";
    text.appendChild(dots);
    container.appendChild(text);
    await randomeTimeout();
    clearInterval(blinkInterval);
}


const container = document.querySelector(".container");
let dots = document.createElement("span");
dots.textContent = "";
hackerTerminal();

const blinkInterval = setInterval(()=>{
    let blink = dots.textContent;
    if (blink === "...") {
        dots.textContent = "";
    } else {
        dots.textContent+=".";
    }
},500)
