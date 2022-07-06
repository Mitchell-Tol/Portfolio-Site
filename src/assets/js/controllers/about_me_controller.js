import { Controller } from "./controller.js";

/**
 * Controls the About Me page.
 * @author Mitchell Tol
 */
export class AboutMeController extends Controller {
    #view;

    constructor() {
        super();
        this.#initializeView();
    }

    async #initializeView() {
        this.#view = await (super.getHtmlFromFile("./src/html/pages/about-me.html"));

        // The view gets put as the main.
        super.setMain(this.#view);
    }
}
