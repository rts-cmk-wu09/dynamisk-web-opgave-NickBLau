let sites = {
    headline: "Join the community campervan sites managers.",
    text: "Discover all the equibbed areas in Italy. Find the shop with all the services for you and your camper.",
    btnicon: "https://dazzling-squirrel-77a63d.netlify.app/imgs/icons/arrow-icon.png",
    places: [
        {
            img: "https://dazzling-squirrel-77a63d.netlify.app/imgs/lucciano.png",
            name: "Lucciano",
            city: "Rome"
        },
        {
            img: "https://dazzling-squirrel-77a63d.netlify.app/imgs/cremonesi.png",
            name: "Cremonesi",
            city: "Florence"
        },
        {
            img: "https://dazzling-squirrel-77a63d.netlify.app/imgs/beneventi.png",
            name: "Beneventi",
            city: "Venice"
        },
    ]
}



let sitessSection = document.querySelector(".sites");
let sitescardWrapper = document.createElement("div")
sitescardWrapper.setAttribute("class", "sitescard_wrapper");


let sitesHeader = document.createElement("section");
sitesHeader.setAttribute("class", "sitesHeader")

let sitesHeadline = document.createElement("h2");
let sitesText = document.createElement("p");
let sitesIcon = document.createElement("img");


sitesHeadline.textContent = sites.headline
sitesText.textContent = sites.text
sitesIcon.src = sites.btnicon

sitesHeader.append(sitesHeadline)
sitesHeader.append(sitesText)
sitesHeader.append(sitesIcon)

sitessSection.append(sitesHeader)

sitessSection.append(sitescardWrapper)


sites.places.forEach((site) => {
let sitescard = document.createElement("section");
sitescard.setAttribute("class", "sitescard_style");

sitescardWrapper.append(sitescard)

let sitescardArticle = document.createElement("article")

let showMore = document.createElement("p")
let sitescardImage = document.createElement("img");
let sitescardHeader = document.createElement("h2");
let sitescardText = document.createElement("p");

sitescardImage.src = site.img
sitescardHeader.textContent = site.name;
sitescardText.textContent = site.city;


sitescardArticle.append(sitescardImage);
sitescardArticle.append(sitescardHeader);
sitescardArticle.append(sitescardText);
sitescardArticle.append(showMore);
sitescard.append(sitescardArticle)
    
	sitessSection.append(sitescardWrapper)

});