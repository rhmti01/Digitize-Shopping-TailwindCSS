// imports from pages 
import main from '/src/js/pages/main.js'
import category from '/src/js/pages/category.js'
import login from '/src/js/pages/login.js'
import shoppingCart from '/src/js/pages/shoppingCart.js'
import singleProduct from '/src/js/pages/singleProduct.js'
import not_found from '/src/js/pages/not_found.js';


// spa 

function router() {

    //  main , login , shoppingCart , category , singleProduct
    const routes = [{
            path: "/",
            view: () => main() ,
        },
        {
            path: "/login",
            view: () => login() ,
        },
        {
            path: "/shoppingCart",
            view: () => shoppingCart() ,
        },
        {
            path: "/category",
            view: () => category() ,
        },
        {
            path: "/singleProduct",
            view: () => singleProduct() ,
        },
    ]

    const potentialRoutes = routes.map((item) => {
        return {
            route: item,
            isMatch: location.pathname === item.path
        }
    })

    let match = potentialRoutes.find((route) => route.isMatch)

    if (!match) {
        match = {
            route: {
                path: "/not-found",
                view: () => not_found()
            },
            isMatch: true
        }
    }
    // console.log(match);
    // console.log(match.route.view());
    document.querySelector("#search").innerHTML = match.route.view()
}

function navigateTo(url) {
    history.pushState(null,null,url)
    router()
}

window.addEventListener("popstate",router)

window.addEventListener("DOMContentLoaded" , ()=>{
    const links = document.querySelectorAll("[data-link]")
    links.forEach((link)=>{
        link.addEventListener("click" , (e)=>{
            // console.log(link);
            // console.log(e.currentTarget.href);
            e.preventDefault()
            navigateTo(e.currentTarget.href);

        })
    })
    router()
})


// theme switch 

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