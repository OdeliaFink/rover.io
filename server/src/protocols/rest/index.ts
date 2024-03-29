import express, { NextFunction, Request, Response } from 'express'
import { errorHandler } from './middlewares/errors'
import routes, { Stores } from './routes'
import cors from 'cors'

interface Options {
    stores: Stores
}

export const NewRestServer = ({ stores }: Options) => {
    const router = express.Router()
    router.use(express.json())
    router.use(cors())

    router.use(createContext)
    // Register all routes
    routes.Register(router, stores)

    router.use(errorHandler)

    return router
}

function createContext(req: Request, res: Response, next: NextFunction) {
    req.context = {}
    return next()
}
