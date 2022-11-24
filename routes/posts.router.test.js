import request from "supertest";
import { pool } from "../db/index.js"
import app from "../app.js";
import { expect, test, afterAll, beforeEach, afterEach } from "@jest/globals";
import { response } from "express";

afterAll(() =>{
    pool.end();
})

test("GET /api/posts", async function(){
    const response = await request(app).get("/api/posts");
    //console.log(response.body)

    expect(response.status).toBe(200);
});

let carryId = 0;
test("POST /api/posts", async function(){
    let userid = 1;
    let posttext = "poster test";
    let weeknumber = 1;
    let testtopic = "testing"

        const response = await request(app).post("/api/posts").send({ user_id: userid,
            post_text: posttext, week_number: weeknumber, topic: testtopic});
            carryId += (response.body.payload[0].id)
            console.log(carryId)
    expect(response.body).toStrictEqual({
        success: true,
        payload: [{
            id: expect.any(Number),
            user_id: userid,
            post_text: posttext,
            week_number: weeknumber,
            topic: testtopic
        }]
    })
    expect(response.status).toEqual(200);
})

test("DELETE /api/posts", async function(){
        let deletedId =carryId;
         const response = await request(app).del(`/api/posts/${deletedId}`);
         let resp = (response.body)
         console.log(resp)
         expect(response.status).toBe(200);
         expect(resp).toStrictEqual({
          success: true,
           // payload: [
            //   {
            //     id: deletedId,
            //     user_id: expect.any(Number),
            //     post_text: expect.any(String),
            //     week_number: expect.any(Number),
            //     topic: expect.any(String)
            // }
          //],
            
            
         })
         
        })
       
// test("Patch /api/posts", async function(){
//             let updatedID =3;
//             let tweeterData = "tweeter PUT supertest Test";
//             let tweetData = "testing PUT apitest";
//              const response = await request(app).put(`/api/tweets/${updatedID}`).send({ tweeter: tweeterData,
//                 tweet: tweetData});;
//              let resp = (response.body)
//              expect(response.status).toBe(200);
//              expect(resp).toStrictEqual({
//                 payload: {
//                     tweet_id: updatedID,
//                     tweeter: expect.any(String),
//                     tweet: expect.any(String)
//                 },
//                 success: true,
                
//              })
             
//             })
           