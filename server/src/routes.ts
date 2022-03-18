import {Express, Request, Response} from 'express'
import { createUserSessionHandler, deleteSessionHandler, getUserSessionsHandler } from './controllers/session.controller'
import { createUserHandler } from './controllers/user.controller'
import deserializeUser from './middleware/deserializeUser'
import requireUser from './middleware/requireUser'
import validate from './middleware/validateResource'
import { createSessionSchema } from './schema/session.schema'
import { createUserSchema } from './schema/user.schema'


function routes(app: Express){

    app.get('/healthCheck', (req: Request, res: Response) => {
        res.sendStatus(200)
    })

    app.post('/api/register', validate(createUserSchema), createUserHandler)

    app.post('/api/login', validate(createSessionSchema), createUserSessionHandler)

    app.get('/api/sessions', requireUser, getUserSessionsHandler)

    app.delete("/api/sessions", requireUser, deleteSessionHandler)

}

export default routes