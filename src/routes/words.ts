import express, { Request, Response } from 'express'
import { newWordValidate } from '../middlewares/new-word-validator'
import { wordExistsValidator } from '../middlewares/word-exists-validator'
import { Word, WordsDb } from '../models/word'
import {body}from 'express-validator'
import { validationRequest } from '../middlewares/validate-request'

const router=express.Router()

export const wordsDb=new WordsDb()

router.get('/word',[
    body('wordCode')
    .isLength({min:1})
    .withMessage('Please provide word code'),
    body('lang')
    .isLength({min:1})
    .withMessage('Please provide language')
],
    validationRequest,
    wordExistsValidator
,(req:Request,res:Response)=>{
    const {wordCode,lang}=req.body


    const word=wordsDb.getWord(wordCode,lang)

    res.status(200).send(word)
})

router.post('/word',
[
    body('wordCode')
    .isLength({min:1})
    .withMessage('Please provide word code'),
    body('lang')
    .isLength({min:1})
    .withMessage('Please provide language'),
    body('text')
    .isLength({min:1})
    .withMessage('Please provide language')
],
validationRequest,
newWordValidate
,(req:Request,res:Response)=>{
    const {wordCode,lang,text}=req.body
    wordsDb.addWord(wordCode,lang,text)

    console.log('Word was created');
    res.status(201).send('Word was created')

})

export {router as wordsRouter}