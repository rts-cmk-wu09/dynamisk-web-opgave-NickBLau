body = document.createElement("section");
body.setAttribute("class", ".footer")



let footer = {
    headline: "When Passion Meets Comfort.",
    text: "Easy Camper",
    options : [

        {
            headline: "Assistance",
            text: "Support Center",
            secondText: "FAQs",
            thirdText: "Cancallation Options",
            fourthText: "Reliabilty and Sequirty"  
        },
        {
            headline: "Become a manager",
             text: "Join your Pairing",
             secondText: "Offer your Service",
             thirdText: "Are you a guide?",
         },

        {
            headline: "Discover the Network",
            text: "Where to shop",
            secondText: "Tour Guided",
            thirdText: "Our Tours",
            fourthText: "About Us"
        },

        {
            copyright: "EasyCamper. All rights reserved.",
            about: "About",
            SiteMap: "Site Map",
            Terms: "terms",
            Privacy: "Privacy policy",
            Teams: "Teams"
        }
    ] 
}



let footersSection = document.querySelector(".footer");
let footerHeader = document.createElement("h2")

footerHeader.textContent = footer.headline




let footercardWrapper = document.createElement("div")

let footercard = document.createElement("section");
footercardWrapper.append(footercard)

let Easycamper = document.createElement("section")
Easycamper.setAttribute("class", "Easy_camper_section")
let EasyCamperHeadline = document.createElement("h2")
let EasyCamperText = document.createElement("p")


EasyCamperText.textContent = footer.text;
EasyCamperHeadline.textContent = footer.headline;

Easycamper.append(EasyCamperText)
Easycamper.append(EasyCamperHeadline)




footer.options.forEach((option) => {

    footercard.setAttribute("class", "footer_card_style");
    let footercardArticle = document.createElement("article")
    footercardWrapper.setAttribute("class", "footer_card_wrapper")
    let footercardImage = document.createElement("img");
    let footercardHeader = document.createElement("h3");
    let footercardFirstText = document.createElement("a");
    let footercardSecondText = document.createElement("a");
    let footercardThirdText = document.createElement("a");
    let footercardFourthText = document.createElement("a");
    


footercardHeader.textContent = option.headline;
footercardFirstText.textContent = option.text;
footercardSecondText.textContent = option.secondText;
footercardThirdText.textContent = option.thirdText;
footercardFourthText.textContent = option.fourthText;
footercard.append(Easycamper)

footercardArticle.append(footercardImage);
footercardArticle.append(footercardHeader);
footercardArticle.append(footercardFirstText);
footercardArticle.append(footercardSecondText);
footercardArticle.append(footercardThirdText);
footercardArticle.append(footercardFourthText);
footercard.append(footercardArticle)
    
footersSection.append(copyrightSection)

footersSection.append(footercardWrapper)

    

});



