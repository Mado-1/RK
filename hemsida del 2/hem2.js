
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});
// Funktion för att scrolla upp när man klickar på knappen
document.getElementById("backToTop").addEventListener("click", function() {
window.scrollTo({ top: 0, behavior: "smooth" });
});

// Visa/dölj "Till toppen"-knappen beroende på scroll-position
window.addEventListener("scroll", function() {
var backToTopBtn = document.getElementById("backToTop");
if (window.scrollY > 300) { // Visa knappen efter 300px scroll
backToTopBtn.style.display = "block";
} else {
backToTopBtn.style.display = "none";
}
});
