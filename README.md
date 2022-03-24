# language_service

This is a simple Language Service project.
The project functionality is to add words to the DB and get words.
The requests format is:
- to add word
post request to HTTP://"IP address":3000/word
 {
"wordCode": "123",
 "lang": "english",
  "text": "the word itself"
}
* a word must have a value in English before we can add a word in any other language
- to get a word
post request to HTTP://"IP address":3000/word
{
"wordCode": "123",
 "lang": "english"
}

- to start server: npm start
- to start tests: npm run test

