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
