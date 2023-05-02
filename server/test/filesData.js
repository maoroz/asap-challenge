let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../server");

// Assertion Style
chai.should();

chai.use(chaiHttp);

describe("Files Data API", () => {
  // Test GET route
  describe("GET /api/files/data", () => {
    it("It should get all the files with their content", (done) => {
      chai
        .request(server)
        .get("/api/files/data")
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.be.an("object");
          response.body.should.have.property("errors");
          response.body.should.have.property("files");
          done();
        });
    });

    it("It should response a not found", (done) => {
      chai
        .request(server)
        .get("/api/file/data")
        .end((err, response) => {
          response.should.have.status(404);
          done();
        });
    });
  });
});
