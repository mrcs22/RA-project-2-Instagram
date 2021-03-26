let search = document.getElementById("search");
let searchSpan = document.getElementById('search-input');
let isSearching = false;
let searchText = "";

console.log(search)
console.log(searchSpan);

document.addEventListener("click", (event) => {

    if(event.target.id === "search" | event.target.id === "search-input"){
        isSearching = true;
    }else{
        isSearching = false;
        searchText = "";
    }


    if(isSearching){
        searchSpan.textContent = ""
    }else{
        searchSpan.textContent="Pesquisar"
    }
    
});

document.addEventListener("keyup", (event) =>{
if(isSearching){
    searchText = searchText + event.key;
    searchSpan.textContent = searchText;
}
})