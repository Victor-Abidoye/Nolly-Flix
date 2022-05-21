// Respnsive navbar slider
const newSlide = () => {
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('.nav-links')
    const navLinks = document.querySelectorAll('.nav-links li')

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active')

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease fowards ${index / 7 + 1.5}s`
            }
        })

        burger.classList.toggle('toggle')
    })

    navLinks.forEach((link) => {
        link.addEventListener('click', () => {
            nav.classList.toggle('nav-active')
            burger.classList.toggle('toggle')
        })
    })
}

const movies = [
    {
        name: "The Redemption",
        likes: 5,
        src: "./assets/img/p9649633_p_v8_ai.jpg",
        Genre: ["action"]
    },
    {
        name: "Two",
        likes: 4,
        src: "./assets/img/p9649633_p_v8_ai.jpg",
        Genre: ["action"]
    },
    {
        name: "loas",
        likes: 8,
        src: "./assets/img/p9649633_p_v8_ai.jpg",
        Genre: ["action"]
    },
    {
        name: "male",
        likes: 3,
        src: "./assets/img/p9649633_p_v8_ai.jpg",
        Genre: ["action"]
    },
    {
        name: "dkldj",
        likes: 5,
        src: "./assets/img/p9649633_p_v8_ai.jpg",
        Genre: ["action"]
    }
]

//Grab DOM Element
let movie_container = document.querySelector('#movie_container')

let storeMovies
// check localStorage for saved movies data
storeMovies = JSON.parse(localStorage.getItem("movies"))

if (!storeMovies) {
    //load to localStorage
    localStorage.setItem("movies", JSON.stringify(movies))

}
storeMovies = JSON.parse(localStorage.getItem("movies"))


function display (arr) {
    for (let i = 0; i < arr.length; i++){
        movie_container.innerHTML += `<div class="shadow-md items-center max-w-xs w-64 h-80 bg-little-100 dark:bg-prudent-100 rounded-md">
                <div class="w-full h-1/2">
                    <img src="./assets/img/p9649633_p_v8_ai.jpg" alt="" class="w-full h-full object-cover rounded-t-md" />
                </div>
                <div class="px-5 text-black">
                    <h2 class="font-bold text-center text-lg py-3">${arr[i].name}</h2>
                    <p class="font-medium text-sm py-1">
                        Genre:
                        <span class="font-normal">
                    </p>
                    <p class="font-medium text-sm py-1">
                        Price: <span class="font-normal">N1000</span>
                    </p>
                    <p class="font-medium text-sm py-1 text-right">
                    <i class="fa-solid fa-magnifying-glass mr-5"> aldsk</i><span>${arr[i].likes}</span>
                    </p>

                </div>
            </div>`
    }
}


display(storeMovies)
newSlide()