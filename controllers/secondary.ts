import { Request, Response } from 'express';
export const getSecondary = (req: Request, res: Response): void => {
   res.render('secondary.ejs')
}