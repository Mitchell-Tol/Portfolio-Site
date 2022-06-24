import { WelcomeController } from "./controllers/welcome_controller.js";

export class App {
    constructor() {
        App.loadPage("welcome", true)
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
            case "welcome":
                new WelcomeController(firstTimeSetup);
                break;

            default:
                new WelcomeController(firstTimeSetup);
                break;
        }
    }
}

new App();
