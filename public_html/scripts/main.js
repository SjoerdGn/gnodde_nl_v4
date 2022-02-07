function mmPlay(x) {
    x.classList.toggle("change");
    var mobMen = document.getElementById("mobileMenuOut");
    if (mobMen.style.display === "block") {
        mobMen.style.display = "none";
    } else {
        mobMen.style.display = "block";
    }
}