document.getElementById("searchInput").addEventListener("keyup", function(event) {
    let searchQuery = event.target.value.toLowerCase();
    let allNamesDOMCollection = document.getElementsByClassName('name');
    
    for (let counter = 0; counter < allNamesDOMCollection.length; counter++) {
        const currentName = allNamesDOMCollection[counter].textContent.toLocaleLowerCase();
        console.log(currentName)
    }
});