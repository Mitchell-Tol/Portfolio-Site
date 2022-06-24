import { Controller } from "./controller.js";

/**
 * Controls the home page.
 * @author Mitchell Tol
 */
export class HomeController extends Controller {
    #view;

    /**
     * constructor
     * @param { boolean } firstTimeSetup Set to true if this is the first time the website loads, so the nav and footer only load in once.
     */
    constructor(firstTimeSetup) {
        super(firstTimeSetup);
        this.#initializeView();
    }

    /**
     * Initializes the main.
     */
    async #initializeView() {
        this.#view = await (super.getHtmlFromFile("./src/html/pages/welcome.html"));
        super.setMain(this.#view);
    }
}
