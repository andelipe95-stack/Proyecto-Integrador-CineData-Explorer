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
const handleSearch = debounce((event) =>{
    console.log(event.target.value);

}, 500);

searchInput.addEventListener("input", handleSearch);

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () =>{

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){
        themeToggle.textContent = "☀️";
    }else{
        themeToggle.textContent = "🌙";
    }
});
