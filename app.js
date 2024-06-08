// Icons
const sunIcon = document.querySelector(".sun");
const moonIcon = document.querySelector(".moon");

// theme vars
const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

// icon toogling
const iconToggle = () => {
    moonIcon.classList.toggle("display-none");
    sunIcon.classList.toggle("display-none");
};

// initial theme check
const themeCheck = () => {
    if (userTheme === "dark" || (!userTheme && systemTheme)) {
        document.documentElement.classList.add("dark");
        moonIcon.classList.add("display-none");
        return;
    }
    sunIcon.classList.add("display-none");
};  

// manual theme switch
const themeSwitch = () => {
    if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        iconToggle();
        return;
    }
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    iconToggle();
}

// call theme switch on clicking buttons
sunIcon.addEventListener("click", () => {
    themeSwitch();
})

moonIcon.addEventListener("click", () => {
    themeSwitch();
})

// Invoke theme check on initial load
themeCheck();


// code Reviews Rattings

let menu = document.getElementById("menu");
let closeIcon = document.getElementById("closeIcon");
let openIcon = document.getElementById("openIcon");
const showMenu = (flag) => {
if (flag) {
menu.classList.toggle("hidden");
closeIcon.classList.toggle("hidden");
openIcon.classList.toggle("hidden");
}
};

let menu2 = document.getElementById("menu2");
let closeIcon2 = document.getElementById("closeIcon2");
let openIcon2 = document.getElementById("openIcon2");
const showMenu2 = (flag) => {
if (flag) {
menu2.classList.toggle("hidden");
closeIcon2.classList.toggle("hidden");
openIcon2.classList.toggle("hidden");
}
};

  