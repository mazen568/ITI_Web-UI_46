const themeToggle = document.getElementById("theme-toggle");
const darkIcon = document.getElementById("theme-toggle-dark-icon");
const lightIcon = document.getElementById("theme-toggle-light-icon");


const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.documentElement.classList.add("dark");
} else if (savedTheme === "light") {
    document.documentElement.classList.remove("dark");
} else {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.documentElement.classList.add("dark");
    }
}


function updateIcons() {
    if (document.documentElement.classList.contains("dark")) {
        darkIcon.classList.add("hidden");
        lightIcon.classList.remove("hidden");
    } else {
        lightIcon.classList.add("hidden");
        darkIcon.classList.remove("hidden");
    }
}


updateIcons();

themeToggle.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");

    if (document.documentElement.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }

    updateIcons();
});


