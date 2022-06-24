import { App } from "../app.js";

export class Controller {
    #navbar;
    #main;
    #footer;

    constructor(firstTimeSetup) {
        this.#initView(firstTimeSetup);
    }

    async #initView(firstTimeSetup) {
        this.#initMain();
        if (firstTimeSetup) {
            await this.#initNavbar();
            await this.#initFooter();
            document.querySelector("body").append(this.#navbar, this.#main, this.#footer);
        }
        else {
            document.querySelector("main").replaceWith(this.#main);
        }
    }

    async #initNavbar() {
        this.#navbar = await this.getHtmlFromFile("./src/html/elements/global/navbar.html");
        this.#navbar.querySelectorAll(".nav-link").forEach(link => {
            link.addEventListener("click", () => {
                App.loadPage(link.getAttribute("controller"));
            });
        });
    }

    async #initFooter() {
        this.#footer = await this.getHtmlFromFile("./src/html/elements/global/footer.html");
    }

    #initMain() {
        this.#main = document.createElement("main");
    }

    setMain(element) {
        this.#main.innerHTML = element.innerHTML;
    }

    async getHtmlFromFile(filepath) {
        const dummyElement = document.createElement("div");
        const htmlString = await (await fetch(filepath)).text();
        dummyElement.innerHTML = htmlString;
        return dummyElement.firstChild;
    }
}
