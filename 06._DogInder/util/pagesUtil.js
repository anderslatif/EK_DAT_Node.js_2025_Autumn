import { readPage, constructPage } from "./templatingEngine.js";


const frontpage = readPage("./public/pages/frontend/index.html");
export const frontpagePage = constructPage(frontpage, {
    tabTitle: "DogInder | Welcome"
});

const matches = readPage("./public/pages/matches/matches.html");
export const matchesPage = constructPage(matches, {
    cssLinks: `<link rel="stylesheet" href="/pages/matches/matches.css">`
});

const contact = readPage("./public/pages/contact/contact.html");
export const contactPage = constructPage(contact, {
    tabTitle: "DogInder | Contact"
});
