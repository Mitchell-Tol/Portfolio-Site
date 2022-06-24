import { HomeController } from "./controllers/home_controller.js";

export class App {
    constructor() {
        App.loadPage("home", true)
    }

    static loadPage(name, firstTimeSetup) {
        // Load in the correct stylesheet.
        document.querySelector(".page-stylesheet").innerHTML = null;
        const stylesheet = document.createElement("link");
        stylesheet.setAttribute("rel", "stylesheet");
        stylesheet.setAttribute("href", `./src/assets/css/pages/${name}.css`);
        document.querySelector(".page-stylesheet").append(stylesheet);

        // Load in controller
        App.#loadController(name, firstTimeSetup);
    }

    static #loadController(name, firstTimeSetup) {
        switch (name) {
            case "home":
                new HomeController(firstTimeSetup);
                break;

            default:
                new HomeController(firstTimeSetup);
                break;
        }
    }
}

new App();
