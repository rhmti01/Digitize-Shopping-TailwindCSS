const menuList = document.querySelector("#menu-list")
const lightIcon = document.querySelector("#lightBtn")
const darkIcon = document.querySelector("#darkBtn")


const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
const themeSwitcherBtns = document.querySelectorAll(".theme-switcher")

if (userTheme === "dark" || (!userTheme && systemTheme)) {
    document.documentElement.classList.add("dark")
    lightIcon.classList.add("hidden")
    xData.classList.backgroundColor = "red"
} else {
    document.documentElement.classList.remove("dark")
    darkIcon.classList.add("hidden")
}
const iconSwitch = (theme) => {
    if (theme === "dark") {
        lightIcon.classList.add("hidden")
        darkIcon.classList.remove("hidden")
    } else {
        lightIcon.classList.remove("hidden")
        darkIcon.classList.add("hidden")
    }
}

themeSwitcherBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const theme = e.target.dataset.theme;
        switch (theme) {
            // dark
            case "dark": {
                document.documentElement.classList.add("dark")
                localStorage.setItem("theme", "dark")
                iconSwitch("dark")
                break;
            }
            // light
            case "light": {
                document.documentElement.classList.remove("dark")
                localStorage.setItem("theme", "light")
                iconSwitch("light")
                break;
            }
            // system
            case "system": {
                localStorage.removeItem("theme")
                if (systemTheme) {
                    document.documentElement.classList.add("dark")
                    iconSwitch("dark")
                } else {
                    document.documentElement.classList.remove("dark")
                    iconSwitch("light")
                }
                break;
            }
            default:
                break;
        }
    })
})