const firstName = document.querySelector(".first-name-title");
const lastName = document.querySelector(".last-name-title");
const photoTitle = document.querySelector(".photo-title");

const titles = [firstName, lastName, photoTitle]

window.addEventListener("load", displayNames)

let intervalId;

// ANIMATE FUNCTIONS
const titlesSlide = [
    { transform: "translateX(120px)" },
    { transform: "translateX(0px)" },
]

const titlesTiming = {
    duration: 100,
    iterations: 1,
}

function displayNames(){
    setTimeout(() => {
        for(let i=0; i<titles.length; i++) {
            setTimeout(()=> {
                titles[i].style.opacity = "1";
                titles[i].animate(titlesSlide, titlesTiming)
    
            },i * 500)
        }

    },500)
}