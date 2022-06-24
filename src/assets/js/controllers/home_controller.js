import { Controller } from "./controller.js";

export class HomeController extends Controller {
    #view;

    constructor(firstTimeSetup) {
        super(firstTimeSetup);
        this.#initializeView();
    }

    async #initializeView() {
        this.#view = await (super.getHtmlFromFile("./src/html/pages/welcome.html"));
        super.setMain(this.#view);
    }
}
