const jokegenerator = document.getElementById("joke");
const btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,political,racist,sexist,explicit&type=single";



let getjoke = () => {
    jokegenerator.classList.remove("fade");
    fetch(url)
    .then(data => data.json())
    .then(item =>{
        jokegenerator.textContent = `${item.joke}`;
        jokegenerator.classList.add("fade");
    });
}

btn.addEventListener("click",getjoke);
