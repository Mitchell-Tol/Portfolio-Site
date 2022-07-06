import { HomeController } from "./controllers/home_controller.js";
import { ProjectsController } from "./controllers/projects_controller.js";

/**
 * The code that runs when the page loads.
 * @author Mitchell Tol
 */
export class App {

    /**
     * Constructor.
     */
    constructor() {
        App.loadPage("home", true)
    }

    /**
     * Loads a page.
     * @param { string } name Name of the page to load (lowercase).
     * @param { boolean } firstTimeSetup Set to true if this is the first time the website loads, so the nav and footer only load in once.
     */
    static loadPage(name, firstTimeSetup) {
        // Load in controller
        if (App.#loadController(name, firstTimeSetup)) {
            // Load in the correct stylesheet if loading the controller was succesful.
            document.querySelector(".page-stylesheet").innerHTML = null;
            const stylesheet = document.createElement("link");
            stylesheet.setAttribute("rel", "stylesheet");
            stylesheet.setAttribute("href", `./src/assets/css/pages/${name}.css`);
            document.querySelector(".page-stylesheet").append(stylesheet);
        }
    }

    /**
     * Loads a controller.
     * @param { string } name Name of the controller to load (lowercase).
     * @param { boolean } firstTimeSetup Set to true if this is the first time the website loads, so the nav and footer only load in once.
     * @return { boolean } The success of loading a controller.
     */
    static #loadController(name, firstTimeSetup) {
        switch (name) {
            case "home":
                new HomeController(firstTimeSetup);
                return true;

            case "projects":
                new ProjectsController();
                return true;

            default:
                console.error("No controller was loaded.");
                return false;
        }
    }
}

new App();
