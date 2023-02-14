let facilities = {
    headline: "Making your facility known is our priority",
    options : [
        {
            icon: "https://dazzling-squirrel-77a63d.netlify.app/imgs/icons/list-check.png",
            headline: "Choose the type of stop",
            text: "Select the type of stopover you are ordering from Equipped Area, Camping and Agricamping"
        },
        {
            icon: "https://dazzling-squirrel-77a63d.netlify.app/imgs/icons/spellcheck.png",
            headline: "Describe your structure",
            text: "Describe thee property, location and nearby attractions"
        },
        {
            icon: "https://dazzling-squirrel-77a63d.netlify.app/imgs/icons/Text-Frame-Add.png",
            headline: "Build your showcase",
            text: "Add photos, videos and descriptions Define the price of each type of that make your propety truly"
        },
        {
            icon: "https://dazzling-squirrel-77a63d.netlify.app/imgs/icons/Calendar-Today.png",
            headline: "Prices and Availability",
            text: "pitch and configure the availablity calendar."
        },
    ]
}


let facilitiessSection = document.querySelector(".facilities");
let facilitiescardWrapper = document.createElement("div")
facilitiescardWrapper.setAttribute("class", "facilitiescard_wrapper");
let facilitiesHeadline = document.createElement("h2");



facilitiesHeadline.textContent = facilities.headline

facilitiessSection.append(facilitiesHeadline)
facilitiessSection.append(facilitiescardWrapper)


facilities.options.forEach((faciliti) => {
let facilitiescard = document.createElement("section");
facilitiescard.setAttribute("class", "facilitiescard_style");

facilitiescardWrapper.append(facilitiescard)

let facilitiescardArticle = document.createElement("article")

let showMore = document.createElement("p")
let facilitiescardImage = document.createElement("img");
let facilitiescardHeader = document.createElement("h2");
let facilitiescardText = document.createElement("p");

facilitiescardImage.src = faciliti.icon;
facilitiescardHeader.textContent = faciliti.headline;
facilitiescardText.textContent = faciliti.text;
showMore.textContent += "show me more"

facilitiescardArticle.append(facilitiescardImage);
facilitiescardArticle.append(facilitiescardHeader);
facilitiescardArticle.append(facilitiescardText);
facilitiescardArticle.append(showMore);
facilitiescard.append(facilitiescardArticle)
    
	facilitiessSection.append(facilitiescardWrapper)

});
