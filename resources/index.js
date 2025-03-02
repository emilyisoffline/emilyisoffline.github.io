document.body.addEventListener("click", function() {
    let splash = document.getElementById("splash");
    let mainContent = document.getElementById("mainContent");
    let footer = document.querySelector("footer");

    splash.classList.add("fade-out"); // Fade out splash screen
    setTimeout(() => {
        splash.style.display = "none"; // Hide it completely
        mainContent.style.display = "block";
        footer.style.opacity = "1"; // Fade in footer
        setTimeout(() => {
            mainContent.style.opacity = "1"; // Fade in main content
        }, 50);
    }, 1500);

}, { once: true }); // Ensures it only runs once

const updatetimeElement = document.getElementById("updatetime");
fetch("https://api.github.com/repos/emilyisoffline/emilyisoffline.github.io/branches/main")
.then(data => data.json())
.then(json => updatetimeElement.textContent = json['commit']['commit']['committer']['date'])
