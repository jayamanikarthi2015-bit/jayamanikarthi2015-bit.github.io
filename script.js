// Search filter
document.getElementById("search").addEventListener("keyup", function () {
    let value = this.value.toLowerCase();
    let items = document.querySelectorAll(".item");

    items.forEach(it => {
        let name = it.querySelector("h3").innerText.toLowerCase();
        it.style.display = name.includes(value) ? "block" : "none";
    });
});

// Category filter
function filterItems(category) {
    let items = document.querySelectorAll(".item");

    items.forEach(it => {
        if (category === "all") {
            it.style.display = "block";
        } else {
            it.style.display = it.classList.contains(category) ? "block" : "none";
        }
    });
}
