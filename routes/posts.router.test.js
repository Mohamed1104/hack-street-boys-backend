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


         
       
test("Patch /api/posts", async function(){
            let updatedID =carryId;
            let userid = 1;
            let posttext = "poster patch test";
            let weeknumber = 2;
            let testtopic = "testing patch"
             const response = await request(app).patch(`/api/posts/${updatedID}`).send({ user_id: userid,
                post_text: posttext, week_number: weeknumber, topic: testtopic});
             let resp = (response.body)
             expect(response.status).toBe(200);
             expect(resp).toStrictEqual({
                success: true,
                payload: [{
                    id: expect.any(Number),
                    user_id: userid,
                    post_text: posttext,
                    week_number: weeknumber,
                    topic: testtopic
                }]
             })
             
            })
           
test("DELETE /api/posts", async function(){
        let deletedId =carryId;
         const response = await request(app).del(`/api/posts/${deletedId}`);
         let resp = (response.body)
         console.log(resp)
         expect(response.status).toBe(200);
         expect(resp).toStrictEqual({
          success: true,   
         })
        })