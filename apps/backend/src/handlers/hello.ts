import type { NextFunction, Request, Response } from "express";

export const hello = (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name } = req.body
        const message = `Hello ${name}`

        res.status(200).json({message})
    } catch (error) {
        next(error)
    }
}