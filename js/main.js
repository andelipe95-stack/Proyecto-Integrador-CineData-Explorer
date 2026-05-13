const searchInput = document.getElementById("searchInput");

function debounce(callback, delay) {
    let timeoutId;
    return (...args) => {
        clearTimeout(timeoutId);

        timeoutId = setTimeout (() => {
            callback(...args);
        }, delay);
    };
}

searchInput.addEventListener("input", (event) =>{
    console.log(event.target.value);
});
