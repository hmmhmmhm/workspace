import * as express from "express"
import "source-map-support/register"
import App from "./App"
import Logger from "./Logger"

// 서버 포트를 지정합니다.
const port: number = Number(process.env.PORT) || 3000

// Express 인스턴스
const app: express.Application = App.getInstance().instance

// Express 인스턴스 서버 포트개방
app.listen(port, () => Logger.debug(`서버 인스턴스가 ${port} 포트로 데이터 수신을 시작합니다.`))
    .on("error", (err) => Logger.error(err))
