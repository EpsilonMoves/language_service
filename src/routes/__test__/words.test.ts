import request from "supertest";
import { app } from "../../app";
import { wordsDb } from "../words";

it("return 400 when incomplete request is sent to get word", async () => {
  await request(app).get("/word").send({
    lang: "hebrew",
  })
  .expect(400);

  await request(app).get("/word").send({
    wordCode: "234",
  })
  .expect(400);
});

it("return 400 when incomplete request is sent to add word", async () => {
    await request(app).post("/word").send({
        wordCode:'123',
        lang: "hebrew",

      })
      .expect(400);
    
      await request(app).post("/word").send({
        wordCode: "234",
        text:"bus"
      })
      .expect(400);

      await request(app).post("/word").send({
        lang: "hebrew",
        text:"bus"
      })
      .expect(400);
});

it("return 404 if a word does not exists", async () => {
    await request(app).get("/word").send({
        wordCode:'123',
        lang: "hebrew",
      })
      .expect(404);
});

it("returns a word that exists with 200", async () => {
    await request(app).post("/word").send({
        wordCode:'123',
        lang: "english",
        text:'hey'
      })

    await request(app).get("/word").send({
        wordCode:'123',
        lang: "english",
      })
      .expect(200);
});

it("fails when a word does not have value in english", async () => {
    wordsDb.deleteDb()
    await request(app).post("/word").send({
        wordCode:'123',
        lang: "hebrew",
        text:'shalom'

      }).expect(400)
});

it("create a word and return 201", async () => {
    await request(app).post("/word").send({
        wordCode:'123',
        lang: "english",
        text:'hey'

      }).expect(201)
});

afterAll(()=>{
    wordsDb.deleteDb()
})