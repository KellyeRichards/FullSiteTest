// This code tells the computer to find all the things on the webpage that have the class name "panel" using the querySelectorAll function.
const panels = document.querySelectorAll(".panel");

// Then it tells the computer to do something every time you click on one of those things. That something is to first remove a special class that makes something look big and important (removeActiveClasses), and then add that special class to the thing you clicked on (panel.classList.add("active")).
panels.forEach(panel => {
    panel.addEventListener("click", () => {
        removeActiveClasses()
        panel.classList.add("active");
    })
})

// The function removeActiveClasses() tells the computer to go through all of the things on the webpage with the class name "panel" and remove that special class from each one.
function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove("active")
    })
}


