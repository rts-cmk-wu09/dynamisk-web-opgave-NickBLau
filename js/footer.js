let footer = {
    headline: "Making your facility known is our priority",
    options : [
        {
            headline: "Discover the Network",
            text: "Where to shop",
            secondText: "Tour Guided",
            ThridText: "Our Tours",
            FourthText: "About Us"
        },
        {
           headline: "Become a manager",
            text: "Join your Pairing",
            secondText: "Offer your Service",
            ThridText: "Are you a guide?",
        },
        {
            headline: "Assistance",
            text: "Support Center",
            secondText: "FAQs",
            ThridText: "Cancallation Options",
            FourthText: "Reliabilty and Sequirty"  
        },
        {
            headline: "Prices and Availability",
            text: "pitch and configure the availablity calendar."
        },
    ] 
}


let footersSection = document.querySelector(".footer");
let footercardWrapper = document.createElement("div")
footercardWrapper.setAttribute("class", "footercard_wrapper");
let footerHeadline = document.createElement("h2");


footerHeadline.textContent = footer.headline

footersSection.append(footerHeadline)
footersSection.append(footercardWrapper)


footer.options.forEach((option) => {
let footercard = document.createElement("section");
footercard.setAttribute("class", "footercard_style");

footercardWrapper.append(footercard)

let footercardArticle = document.createElement("article")

let showMore = document.createElement("p")
let footercardImage = document.createElement("img");
let footercardHeader = document.createElement("h2");
let footercardText = document.createElement("p");

footercardHeader.textContent = option.headline;
footercardText.textContent = option.text;
footercardArticle.append(footercardImage);
footercardArticle.append(footercardHeader);
footercardArticle.append(footercardText);
footercardArticle.append(showMore);
footercard.append(footercardArticle)
    
	footersSection.append(footercardWrapper)

});



