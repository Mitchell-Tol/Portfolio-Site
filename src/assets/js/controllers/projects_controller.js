import { Controller } from "./controller.js";
import { NetworkManager } from "../networkManager.js";

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
        await this.#loadProjects();

        // The view gets put as the main.
        super.setMain(this.#view);
    }

    /**
     * Loads projects from database into DOM.
     */
    async #loadProjects() {
        const projects = await NetworkManager.doRequest("/project", "GET");
        const template = this.#view.querySelector(".project-container-template");
        projects.forEach(project => {
            const projectElement = template.content.cloneNode(true);
            projectElement.querySelector(".project-title").innerText = project.title;
            projectElement.querySelector(".project-image").src = `./src/assets/img/pages/projects/${project.name}.png`; //Adding an image for a project is necessary (PNG).
            projectElement.querySelector(".project-description").innerText = project.description;
            this.#view.querySelector(".project-list-container").appendChild(projectElement);
        });
    }
}
