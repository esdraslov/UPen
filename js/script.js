function open(url){
    window.open(url);
};
function getBarValue(bar){
    search = bar.value ? bar.value != null : "nothing found";
    console.log(search);
};
let searchBar = document.getElementById("search");
let search = searchBar.value ? searchBar.value != null : "nothing found";
