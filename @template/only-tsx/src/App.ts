import * as express from "express"

class App {
    public instance: express.Application

    public static getInstance(): App {
        return new App()
    }

    constructor() {
        this.instance = express()

        /**
         * @description
         * 여기에서 기본 Express 요소를 초기화합니다.
         */
        this.instance.get("/", (req: express.Request, res: express.Response, next: express.NextFunction) => {
            res.send("Hello world")
        })
    }
}

export default App
