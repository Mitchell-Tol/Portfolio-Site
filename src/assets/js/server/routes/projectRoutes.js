let ProjectRoutes = class {
    #route
    #app
    #connection

    /**
     * Constructor.
     * @param { function } app The express app.
     * @param { object } connection The mysql connection.
     */
    constructor(app, connection) {
        this.#route = "/project"
        this.#app = app;
        this.#connection = connection;

        this.getProjects();
    }

    /**
     * Runs a SELECT query when the route is contacted.
     */
    getProjects() {
        this.#app.get(this.#route, (req, res) => {
            this.#connection.query({
                sql: "SELECT * FROM project"
            }, (error, results) => {
                if (error) {
                    res.status(400).json({message: `Something went wrong: ${error}`});
                }
                else {
                    res.status(200).json(results);
                }
            });
        });
    }
}

module.exports = ProjectRoutes;
