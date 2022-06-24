import { App } from "../app.js";

/**
 * Used for controlling the website.
 * @author Mitchell Tol
 */
export class Controller {
    #navbar;
    #main;
    #footer;

    /**
     * constructor
     * @param { boolean } firstTimeSetup Set to true if this is the first time the website loads, so the nav and footer only load in once.
     */
    constructor(firstTimeSetup) {
        this.#initView(firstTimeSetup);
    }

    /**
     * Initializes the view.
     * @param { boolean } firstTimeSetup Set to true if this is the first time the website loads, so the nav and footer only load in once.
     */
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

    /**
     * Initializes the navbar.
     */
    async #initNavbar() {
        this.#navbar = await this.getHtmlFromFile("./src/html/elements/global/navbar.html");
        this.#navbar.querySelectorAll(".nav-link").forEach(link => {
            link.addEventListener("click", () => {
                App.loadPage(link.getAttribute("controller"));
            });
        });
    }

    /**
     * Initializes the footer.
     */
    async #initFooter() {
        this.#footer = await this.getHtmlFromFile("./src/html/elements/global/footer.html");
    }

    /**
     * Initializes the main. But is to be set by setMain().
     */
    #initMain() {
        this.#main = document.createElement("main");
    }

    /**
     * Sets the main to the given element.
     * @param { HTMLElement } element The element to set as the main.
     */
    setMain(element) {
        this.#main.innerHTML = element.innerHTML;
    }

    /**
     * Converts an HTML file to an HTML element.
     * @param { string } filepath The path to the file to convert.
     * @returns { HTMLElement }
     */
    async getHtmlFromFile(filepath) {
        const dummyElement = document.createElement("div");
        const htmlString = await (await fetch(filepath)).text();
        dummyElement.innerHTML = htmlString;
        return dummyElement.firstChild;
    }
}
