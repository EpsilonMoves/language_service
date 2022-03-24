import  { NextFunction, Request, Response } from "express";
import { wordsDb } from "../routes/words";


export const newWordValidate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {

  const { wordCode, lang } = req.body;

  if (lang === "english") {
    // the new word is in english
    next();
  }else{
      if(wordsDb.hasWordInEnglish(wordCode)){
          next();
        }else{
            res.status(400).send('word must have a value in english first')
        }
    }
};
