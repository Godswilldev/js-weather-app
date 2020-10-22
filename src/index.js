const api = {
    key: "74b515b6adf05a133d5641ca29abaa14",
    base: "https://api.openweathermap.org/data/2.5/",
}

const searchBox = document.querySelector('.search-box');
searchBox.addEventListener('keypress', setQuery);

function setQuery (event) {
    if (event.keyCode === 13){
        getResults(searchBox.value);
    }
}
