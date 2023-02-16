let footer = {
    headline: "Making your facility known is our priority",
    options : [
        {
            headline: "Discover the Network",
            text: "Where to shop",
            secondText: "Tour Guided",
            thirdText: "Our Tours",
            fourthText: "About Us"
        },
        {
           headline: "Become a manager",
            text: "Join your Pairing",
            secondText: "Offer your Service",
            thirdText: "Are you a guide?",
        },
        {
            headline: "Assistance",
            text: "Support Center",
            secondText: "FAQs",
            thirdText: "Cancallation Options",
            fourthText: "Reliabilty and Sequirty"  
        },
    ] 
}


let footersSection = document.querySelector(".footer");
let footerHeader = document.createElement("h2")





let footercardWrapper = document.createElement("div")

let footercard = document.createElement("section");
footercardWrapper.append(footercard)



footer.options.forEach((option) => {

    footercard.setAttribute("class", "footer_card_style");
    let footercardArticle = document.createElement("article")
    footercardWrapper.setAttribute("class", "footer_card_wrapper")
    let footercardImage = document.createElement("img");
    let footercardHeader = document.createElement("h3");
    let footercardFirstText = document.createElement("p");
    let footercardSecondText = document.createElement("p");
    let footercardThirdText = document.createElement("p");
    let footercardFourthText = document.createElement("p");
    
    


footercardHeader.textContent = option.headline;
footercardFirstText.textContent = option.text;
footercardSecondText.textContent = option.secondText;
footercardThirdText.textContent = option.thirdText;
footercardFourthText.textContent = option.fourthText;

footercardArticle.append(footercardImage);
footercardArticle.append(footercardHeader);
footercardArticle.append(footercardFirstText);
footercardArticle.append(footercardSecondText);
footercardArticle.append(footercardThirdText);
footercardArticle.append(footercardFourthText);
footercard.append(footercardArticle)
    
    footersSection.append(footercardWrapper)

});



