let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../server");

// Assertion Style
chai.should();

chai.use(chaiHttp);

describe("Files List API", () => {
  // Test GET route
  describe("GET /api/files/list", () => {
    it("It should get all the name files", (done) => {
      chai
        .request(server)
        .get("/api/files/list")
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.be.an("array");
          response.body.length.should.be.eq(9);
          done();
        });
    });

    it("It should response a not found", (done) => {
      chai
        .request(server)
        .get("/api/file/list")
        .end((err, response) => {
          response.should.have.status(404);
          done();
        });
    });
  });
});
