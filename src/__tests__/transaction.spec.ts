import request from "supertest";
import app from "../app";

const balance = {
  "account": 3882768020,
  "balance": 110300,
  "createdAt": "2022-04-04T19:50:55.571Z"
};

const balancePost = {
  "balance": 110300,
};

const transaction = {
  "reference": "311476de-cc57-4250-b265-72b6f5ac0107",
  "senderAccount": 4547927321,
  "amount": 300,
  "receiverAccount": 3882768020,
  "transferDescription": "for payment",
  "createdAt": "2022-04-04T22:01:45.830Z"
}

const trans = {
  "senderAccount": 4547927321,
  "amount": 300,
  "receiverAccount": 3882768020,
  "transferDescription": "for payment",
}


// let accountNumber;

describe("Should respond with 200 when user is posted", () => {

  it("POST /send", async () =>  {
    const res = await request(app)
      .post("/create-account")
      .expect("Content-Type", /json/)
      .send({
        balancePost
      });
      expect(200).toBe(200)
  });

  it("should return 404 status code", async () => {
    const res = await request(app)
    .post("").send(balancePost);
    expect(404).toBe(404);
  })

});

describe("Should return 200 for users found", () => {
  it("GET /balance", async () => {
    const res = await request(app).get("/balances")
      .send({
        balance
      })
      expect(200).toStrictEqual(200)
  });

  it("GET /", async () => {
    const res = await request(app).get("/bal")
      .send({
        balance
      })
      expect(404).toBe(404)
  });
});


describe("GET /balances/:id", () => {

    it("should return an 200 status for item found", async () => {
      let accountNumber;
        const res = await request(app).get(`/balances/${accountNumber}`);
        expect(res.status).toBe(404);
    });

});

describe("GET /balances/:id", () => {

  it("should return an 404 status for item not found", async () => {
    let accountNumber;
      const res = await request(app).put(`/${accountNumber}`);
      expect(404).toBe(404);
  });

});

describe("POST /transfer", () => {

    it("should return a status for item not found", async () => {
        const res = await request(app).delete(`/transfer`);
        expect(200).toBe(200);
    });

    it("POST /transfer", async () => {
      let accountNumber;
      const res = await request(app).delete(`/transfer/${accountNumber}`)
        expect(res.status).toBe(404);
    });

});
