import request from "supertest";
import { pool } from "../db/index.js"
import app from "../app.js";
import { expect, test, afterAll, beforeEach, afterEach } from "@jest/globals";
import { response } from "express";

afterAll(() =>{
    pool.end();
})

test("GET /api/comments", async function(){
    const response = await request(app).get("/api/comments");
    console.log(response.body)

    expect(response.status).toBe(200);
});

let carryCommentId = 0;
test("POST /api/comments", async function(){
    let userid = 1;
    let postid = 1;
    let testcomment = "testing"

        const response = await request(app).post("/api/comments").send({ user_id: userid,
            post_id: postid, comment: testcomment});
            carryCommentId += (response.body.payload[0].id)
            console.log(carryCommentId)
    expect(response.body).toStrictEqual({
        success: true,
        payload: [{
            id: expect.any(Number),
            user_id: userid,
            post_id: postid,
            comment: testcomment
        }]
    })
    expect(response.status).toEqual(200);
})
test("DELETE /api/comments", async function(){
        let deletedId =carryCommentId;
         const response = await request(app).del(`/api/comments/${deletedId}`);
         let resp = (response.body)
         console.log(resp)
         expect(response.status).toBe(200);
         expect(resp).toStrictEqual({
          success: true,
//            // payload: [
//             //   {
//             //     id: deletedId,
//             //     user_id: expect.any(Number),
//             //     post_text: expect.any(String),
//             //     week_number: expect.any(Number),
//             //     topic: expect.any(String)
//             // }
//           //],
            
            
         })
         
        })
       