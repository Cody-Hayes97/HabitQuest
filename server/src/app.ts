import express from 'express'
import config from 'config'
import connect from './utils/connect'
import logger from './utils/logger'
import routes from './routes'
import deserializeUser from './middleware/deserializeUser'


const app = express()

app.use(express.json())

app.use(deserializeUser);


const port = config.get<number>('port')


app.get('/', (req, res) => {
    res.send("working server")
})


app.listen(port, async () => {
    logger.info('running on port ' + port)

    await connect()

    routes(app)
})