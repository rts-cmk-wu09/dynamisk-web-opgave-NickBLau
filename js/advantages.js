let advantages = [
    {
        icon:"https://dazzling-squirrel-77a63d.netlify.app/imgs/icons/compare.png",
        headline: "Convenience and Transparency",
        text: "You don’t have to find out later or only after camenierk and trarsparent Easyamper ratains pliacas and beautias of your tariaary and halpin a fixed commission on each transaction of 5"
    },
    {
        icon:"https://dazzling-squirrel-77a63d.netlify.app/imgs/icons/library_books.png",
        headline: "Digital marketing and editorial support",
        text: "You don’t have to find out later or only after camenierk and trarsparent Easyamper ratains pliacas and beautias of your tariaary and halpin a fixed commission on each transaction of 5"
    },
    {
        icon:"https://dazzling-squirrel-77a63d.netlify.app/imgs/icons/Compare-HSV.png",
        headline: "Community of services dedicated to campers",
        text: "You don’t have to find out later or only after camenierk and trarsparent Easyamper ratains pliacas and beautias of your tariaary and halpin a fixed commission on each transaction of 5"
    },
]



let advantagessSection = document.querySelector(".advantages");
advantages.forEach((advantages) => {
let advantagescard = document.createElement("section");

advantagescard.setAttribute("class", "advantages_card_style");
let advantagescardWrapper = document.createElement("div")
let advantagescardArticle = document.createElement("article")
advantagescardWrapper.setAttribute("class", "advantages_card_wrapper")
let advantagescardImage = document.createElement("img");
let advantagescardHeader = document.createElement("h3");
let advantagescardText = document.createElement("p");
let advantagescardLink = document.createElement("a");

advantagescardImage.src = advantages.icon;
advantagescardHeader.textContent = advantages.headline;
advantagescardText.textContent = advantages.text;

advantagescardArticle.append(advantagescardImage);
advantagescardArticle.append(advantagescardHeader);
advantagescardArticle.append(advantagescardText);
advantagescardArticle.append(advantagescardLink);
advantagescard.append(advantagescardArticle)
    

    advantagessSection.append(advantagescard)

});
