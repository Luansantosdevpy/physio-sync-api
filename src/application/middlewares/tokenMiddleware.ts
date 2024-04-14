import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';


export function verificarToken(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: 'Token not provide' });
    }

    const secretKey = process.env.SECRET_KEY;

    if (!secretKey) {
        return res.status(500).json({ message: 'Secret key not provided' });
    }

    jwt.verify(token, secretKey!, (err) => {
        if (err) {
            return res.status(401).json({ message: 'Invalid token' });
        }

        next();
    });
}
