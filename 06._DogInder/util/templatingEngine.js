import fs from 'fs';

const header = readPage("./public/components/header/header.html");
const footer = readPage("./public/components/footer/footer.html");

export function constructPage(pageContent, options = {}) {
    return header
    .replace('$$TAB_TITLE$$', options.tabTitle || "DogInder")
    .replace('$$CSS_LINKS$$', options.cssLinks || "")
     + pageContent 
     + footer;
}



export function readPage(path) {
    return fs.readFileSync(path).toString();
}

