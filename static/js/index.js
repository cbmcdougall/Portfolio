window.onload = () => {
    // Determine current active button, default to home
    const currentSection = window.location.hash.split('#')[1];
    const idSelector = currentSection || "home"
    // Toggle on button as active
    const sectionButton = document.getElementById(`${idSelector}-button`);
    sectionButton.classList.toggle("isactive");
}


// Toggle active button on click
const buttons = document.querySelectorAll(".nav-button");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        // Toggle off currently active button
        const activeButton = document.querySelector(".isactive");
        activeButton.classList.toggle("isactive");
        // Toggle on clicked button as active
        button.classList.toggle("isactive");
    })
})