let hero = {
    image: "https://dazzling-squirrel-77a63d.netlify.app/imgs/hero.png",
    headline:
    "Find out how we can save your time in Backpacking in Europe",
    copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac amet id eget scelerisque amet etiam in sit commodo. Pretium ut duis orci pulvinar pretium id consectetur.",
    icon: "https://dazzling-squirrel-77a63d.netlify.app/imgs/icons/Globe.png",
    cube: "assets/cube1.svg",
    keyhole: "assets/keyhole.svg",
    arrow_down: "assets/arrow_down.svg"
    
}


let heading = document.querySelector(".hero");

let heroImage = document.createElement("img");
let heroIcon = document.createElement("img");
let heroDiv = document.createElement("div");
heroDiv.setAttribute("class", "hero_div")
let navDiv = document.createElement("div")
navDiv.setAttribute("class", "navdiv")
let KeyArrow = document.createElement("div")
KeyArrow.setAttribute("class", "keyarrow")
let heroText = document.createElement("p");
let heroHeader = document.createElement("h1");
let heroArticle = document.createElement("article");




let cubeIcon = document.createElement("img")
let keyholeIcon = document.createElement("img")
let arrow_downIcon = document.createElement("img")

let explore = document.createElement("a")
explore.textContent += "explore"


cubeIcon.src = hero.cube
keyholeIcon.src = hero.keyhole
arrow_downIcon.src = hero.arrow_down

KeyArrow.appendChild(arrow_downIcon)
KeyArrow.append(keyholeIcon)
navDiv.append(cubeIcon)
navDiv.append(KeyArrow)



heroImage.src = hero.image
heading.appendChild(heroImage)
heading.append(navDiv)


heroHeader.textContent = hero.headline;
heroText.textContent = hero.copy

heroHeader.innerHTML = hero.headline.replace(
        "save your time",
        "<span>save your time</span>")

heroArticle.append(heroHeader);
heroArticle.append(heroText);
heroArticle.append(heroDiv);
heading.append(heroArticle);
heroIcon.src = hero.icon


heroDiv.appendChild(heroIcon)
heroDiv.append(explore)





