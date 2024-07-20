

//we have the button to which we need to add the event

function requestINFO() {
    const xhr = new XMLHttpRequest();
    const githubUserAPI = "https://api.github.com/users/hiteshchoudhary";
    xhr.onreadystatechange = function() {
        if (xhr.readyState==4) {
            let data = JSON.parse(this.responseText);
            document.body.innerHTML = `
            <div class="card">
                <div class="image">
                    <img src="${data.avatar_url}">
                </div>
                <p>
                    ${data.followers}
                </p>
            </div> `
        }
    }
    xhr.open("GET",githubUserAPI);
    xhr.send();
}

const button = document.querySelector("button");
button.addEventListener("click",requestINFO);