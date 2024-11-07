const jokes = [
    "How do you generate a random string? Put a",
    "Windows user in front of Vim and tell them to",
    "exit"
];

const joke = document.getElementById("joke");
const getj = document.getElementById("get");
const clr = document.getElementById("clear");
const count = document.getElementsByClassName("count");

async function get() {
    try {
        const res = await fetch("https://v2.jokeapi.dev/joke/any");
        const data = await res.json();
        joke.textContent = data.setup + " " + data.delivery;
    } catch (error) {
        joke.textContent = "Failed to fetch joke.";;
    }
}

function updateCount() {
    count[0].textContent = joke.textContent.length;
}

getj.addEventListener("click", function () {
    get().then(updateCount);
});

clr.addEventListener("click", function () {
    joke.textContent = "";
    updateCount();
});


