const search = document.getElementById("search");
// const cards = document.getElementById("cards");

search.addEventListener("keyup", e =>{

    // const searchText = e.target.value.toLowerCase();
    // cards.forEach(card => {
    //     const countryName = card.querySelectorAll(".country-name").textContent.toLowerCase();

    //     if (countryName.includes(searchText)) {
    //         card.classList.remove("filter");
    //     } else {
    //         card.classList.add("filter");
    //     }
    // })

    if(e.target == search){
        document.querySelectorAll(".country").forEach(el => el.textContent.toLowerCase().includes(e.target.value.toLowerCase())
        ? el.classList.remove("filter")
        : el.classList.add("filter") 
    )
    }

 })