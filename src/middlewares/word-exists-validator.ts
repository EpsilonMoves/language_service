import { NextFunction, Request, Response } from "express";
import { wordsDb } from "../routes/words";


export const wordExistsValidator = (
  req: Request,
  res: Response,
  next: NextFunction
) => {

  const { wordCode,lang } = req.body;

    if(wordsDb.hasWord(wordCode,lang)){
        next()
    }else{
        res.status(404).send('Word does not exists')
    }
};
