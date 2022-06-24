import { Controller } from "./controller.js";

/**
 * Controls the projects page.
 * @author Mitchell Tol
 */
export class ProjectsController extends Controller {
    #view;

    /**
     * constructor
     */
    constructor() {
        super();
        this.#initializeView();
    }

    /**
     * Initializes the main.
     */
     async #initializeView() {
        this.#view = await (super.getHtmlFromFile("./src/html/pages/projects.html"));
        super.setMain(this.#view);
    }
}