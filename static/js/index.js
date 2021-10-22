// Determine current active button, default to home
window.onload = () => {
    const currentSection = window.location.hash.split('#')[1];
    const sectionButton = document.getElementById(`${currentSection}-button` || "home-button");
    sectionButton.classList.toggle("isactive");
}


// Toggle active button on click
const buttons = document.querySelectorAll(".navbutton");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        // If another button is active, toggle it off
        const activeButton = document.querySelector(".isactive");
        activeButton.classList.toggle("isactive");
        button.classList.toggle("isactive");
    })
})