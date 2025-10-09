import fs from 'fs';

const header = readPage("./public/components/header/header.html");
const footer = readPage("./public/components/footer/footer.html");


const frontpage = readPage("./public/pages/frontend/index.html");
export const frontpagePage = header + frontpage + footer;

const matches = readPage("./public/pages/matches/matches.html");
export const matchesPage = header + matches + footer;


function readPage(path) {
    return fs.readFileSync(path).toString();
}