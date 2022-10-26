// When the #grayButton is clicked, the color scheme of the page should change to more of a "dark mode" feel, with gray backgrounds and white text throughout.
// The #whiteButton should bring things back to the "light mode" color scheme with white backgrounds and dark text

const grayBtn=document.getElementById("grayButton");
grayBtn.addEventListener("click",function() {
//change color scheme
document.body.classList.add("darkmode");

})

// Try to do this by setting styles (.style)
// Remember to try one step at a time, testing each stage as you go!

const whiteBtn = document.querySelector("whitebutton");
function setwhiteScheme(){
document.body.classList.remove("darkmode");
}