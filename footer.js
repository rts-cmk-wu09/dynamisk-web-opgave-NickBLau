let body = document.querySelector("body")

let myFooter = document.createElement("section")
myFooter.setAttribute("class", "footer")

body.append(myFooter)



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
let flexDiv= document.createElement("div")
flexDiv.setAttribute("class", "flexDiv")
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


    let copyrightSection = document.createElement("section")
    copyrightSection.setAttribute("class", "copyrightsection")  
    let copyrightText = document.createElement("p")
    let copyrightLinksabout = document.createElement("a")
    let copyrightLinksSitemap = document.createElement("a")
    let copyrightLinksTerms = document.createElement("a")
    let copyrightLinksPrivacy = document.createElement("a")
    let copyrightLinksTeams = document.createElement("a")
    let copyrightDiv = document.createElement("div")

    copyrightText.textContent = option.copyright;
    copyrightLinksabout.textContent = option.about
    copyrightLinksSitemap.textContent = option.SiteMap
    copyrightLinksTerms.textContent = option.Terms
    copyrightLinksPrivacy.textContent = option.Privacy
    copyrightLinksTeams.textContent = option.Teams

    copyrightSection.append(copyrightText)
    copyrightDiv.append(copyrightLinksabout)
    copyrightDiv.append(copyrightLinksSitemap)
    copyrightDiv.append(copyrightLinksTerms)
    copyrightDiv.append(copyrightLinksPrivacy)
    copyrightDiv.append(copyrightLinksTeams)
    copyrightSection.append(copyrightDiv)

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
flexDiv.append(footercardArticle)
footercard.append(flexDiv)
    

footersSection.append(footercardWrapper)

footercardWrapper.append(copyrightSection)
    

});



